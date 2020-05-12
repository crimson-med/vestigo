import { AxiosResponse } from 'axios';
import IntenseScan from './intenseScan';
import { formatDate } from '../tools/dateFormatter';
import * as fs from 'fs';

export enum ReportType {
    MARKDOWN,
    HTML
}
export default class Report {
    target: string;
    poweredBy: string;
    cors: string;
    lastModified: string;
    contentType: string;
    intenseScan: IntenseScan;
    flags: any;
    startDate: Date;
    endDate: Date;
    elapsedSeconds: number;
    constructor(target: string) {
        this.poweredBy = ""
        this.cors = ""
        this.lastModified = ""
        this.contentType = ""
        this.intenseScan = new IntenseScan();
        this.flags = {};
        this.startDate = new Date();
        this.endDate = new Date();
        this.elapsedSeconds = 0;
        this.target = target;
    }

    loadFromResponse(response: AxiosResponse) {
        this.poweredBy = (response.headers['x-powered-by']) ? response.headers['x-powered-by'] : '';
        this.cors = (response.headers['access-control-allow-origin']) ? response.headers['access-control-allow-origin'] : '';
        this.lastModified = (response.headers['last-modified']) ? response.headers['last-modified'] : '';
        this.contentType = (response.headers['content-type']) ? response.headers['content-type'] : '';
    }

    exportSummary(type: ReportType = ReportType.MARKDOWN) {
        let template: string = ``
        // Load Tepmplate
        if (type == ReportType.HTML) {
            template = fs.readFileSync('./templates/report.html', 'utf8');
        } else {
            template = fs.readFileSync('./templates/report.md', 'utf8');
        }
        // Override the classic info
        template = template.replace("{title}", this.flags.target);
        template = template.replace("{title}", this.flags.target);
        template = template.replace("{date}", formatDate(this.startDate, "dddd dd MMMM yyyy hh:mm"));
        template = template.replace("{target}", this.target);
        template = template.replace("{elapsedSeconds}", this.elapsedSeconds.toString());
        let tempFlags = ``;
        // Building the table for flags
        for (const [key, value] of Object.entries(this.flags)) {
            if (type == ReportType.HTML) {
                tempFlags = tempFlags+`<tr><td>${key}</td><td>${value}</td></tr>`;
            } else {
                tempFlags = tempFlags+`|   ${key}   |   ${value}    |\n`
            }
        }
        template = template.replace("{flags}", tempFlags);
        let tempParams = '';
        if (type == ReportType.HTML) {
            tempParams = `<tr><td>Powered By</td><td>${this.poweredBy}</td></tr>
            <tr><td>Cors</td><td>${this.cors}</td></tr>
            <tr><td>Last Modified</td><td>${this.lastModified}</td></tr>
            <tr><td>Content Type</td><td>${this.contentType}</td></tr>`;
            let urls = this.intenseScan.getUrlsSuccess().reduce((accumulator: any, currentValue: any) => {
                return accumulator+`<li>${currentValue}</li>`;
            }, "")
            let paths = this.intenseScan.getAllPathsDisclosures().reduce((accumulator: any, currentValue: any) => {
                return accumulator+`<li>${currentValue}</li>`;
            }, "")
            template = template.replace("{url1}", urls);
            template = template.replace("{path1}", paths);
            template = template.replace("{params}", tempParams);
            fs.writeFileSync("./reportFinal.html", template.toString());
        } else {
                tempParams = `|   Powered By   |   ${this.poweredBy}    |
|   CORS   |   ${this.cors}    |
|   Last Modified   |   ${this.lastModified}    |
|   Content Type   |   ${this.contentType}    |`;
        template = template.replace("{url1}", this.intenseScan.getUrlsSuccess().join('\n- '));
        template = template.replace("{path1}", this.intenseScan.getAllPathsDisclosures().join('\n- '));
        template = template.replace("{params}", tempParams);
        fs.writeFileSync("./reportFinal.md", template.toString());
        }
        
    }
}