import { AxiosResponse } from 'axios';
import IntenseScan from './intenseScan';
import { formatDate } from './../tools/dateFormatter';
import * as chalk from 'chalk';
import { FileHandler } from '@argus-inc/fluct';
const fs = new FileHandler('.vestigo');
import './../string.extensions';
import { extractHostname } from '../tools/urlHandler';
export enum ReportType {
    MARKDOWN,
    HTML
}

export interface WhoIs {
    domainName: string
    registrarWhoisServer: string
    registrar: string
    registrantName: string
    registrantOrganization: string
    registrantStreet: string
    registrantCity: string
    nameServer: string
}
export default class Report {
    reportType: ReportType;
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
    whois: WhoIs;
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
        this.whois = this.initWhois();
        this.reportType = ReportType.MARKDOWN
        //createTempDir();
    }

    initWhois(whoisObj: any = {}) {
        const result = {
            domainName: whoisObj.domainName || "",
            registrarWhoisServer: whoisObj.registrarWhoisServer || "",
            registrar: whoisObj.registrar || "",
            registrantName: whoisObj.registrantName || "",
            registrantOrganization: whoisObj.registrantOrganization || "",
            registrantStreet: whoisObj.registrantStreet || "",
            registrantCity: whoisObj.registrantCity || "",
            nameServer: whoisObj.nameServer || ""
        }
        return result
    }

    loadFromResponse(response: AxiosResponse) {
        this.poweredBy = (response.headers['x-powered-by']) ? response.headers['x-powered-by'] : '';
        this.cors = (response.headers['access-control-allow-origin']) ? response.headers['access-control-allow-origin'] : '';
        this.lastModified = (response.headers['last-modified']) ? response.headers['last-modified'] : '';
        this.contentType = (response.headers['content-type']) ? response.headers['content-type'] : '';
    }

    exportSummary(type: ReportType = ReportType.MARKDOWN, output: string | null = null) {
        this.reportType = type;
        let template: string = ``
        // Load Tepmplate
        if (this.reportType == ReportType.HTML) {
            const pathed = fs.createPath(["templates/report.html"], false, true);
            console.log(pathed)
            template = fs.read(pathed);
        } else {
            const pathed = fs.createPath(["templates/report.md"], false, true);
            console.log(pathed)
            template = fs.read(pathed);
        }
        // Export basic informations
        template = this.exportBasics(template)
        // Building the table for flags
        let tempFlags = ``;
        tempFlags = this.generateTable(this.flags);
        template = template.replace("{flags}", tempFlags);
        // Export whois information
        template = this.exportWhois(template)
        // Export extra information
        template = this.exportExtra(template)
        // Export Valid Endpoints
        template = this.exportValidEndpoints(template)
        // Export Paths Disclosures
        template = this.exportPathsDisclosures(template)

        this.exportFinalize(template)
    }

    exportFinalize(template: string) {
        const mainPath = fs.createPath([extractHostname(this.flags.target)], true);
        if (!fs.exists(mainPath)) {
            fs.createDir(mainPath)
        }
        let pathed = `${mainPath}/${+ new Date()}-vestigo.md`

        if (this.reportType === ReportType.HTML) {
            pathed = `${mainPath}/${+ new Date()}-vestigo.html`
        }

        fs.save(pathed, template.toString());
        console.log(` - Report Generated: ${chalk.green(pathed)}`)
    }

    exportPathsDisclosures(template: string) {
        if (this.reportType === ReportType.HTML) {
            let paths = this.intenseScan.getAllPathsDisclosures().reduce((accumulator: any, currentValue: any) => {
                return accumulator + `<li>${currentValue}</li>`;
            }, "")
            template = template.replace("{path1}", paths);
        } else {
            template = template.replace("{path1}", this.intenseScan.getAllPathsDisclosures().join('\n- '));
        }
        return template
    }

    exportValidEndpoints(template: string) {
        if (this.reportType === ReportType.HTML) {
            let urls = this.intenseScan.getUrlsSuccess().reduce((accumulator: any, currentValue: any) => {
                return accumulator + `<li>${currentValue}</li>`;
            }, "")
            template = template.replace("{url1}", urls);
        } else {
            template = template.replace("{url1}", this.intenseScan.getUrlsSuccess().join('\n- '));
        }
        return template
    }

    exportExtra(template: string) {
        const extraInformation = {
            "Powered By": this.poweredBy,
            "CORS": this.cors,
            "Last Modified": this.lastModified,
            "Content Type": this.contentType
        }
        return template.replace("{params}", this.generateTable(extraInformation))
    }

    exportBasics(template: string) {
        // Override the classic info
        template = template.replace("{title}", this.flags.target);
        template = template.replace("{title}", this.flags.target);
        template = template.replace("{date}", formatDate(this.startDate, "dddd dd MMMM yyyy hh:mm"));
        template = template.replace("{target}", this.target);
        template = template.replace("{elapsedSeconds}", this.elapsedSeconds.toString());
        return template
    }

    exportWhois(template: string) {
        if (this.isWhoisEmpty()) {
            // Removig tags and basic formatting
            template = template.replaceBetween(template.indexOf("{whois}"), template.indexOf("{/whois}") + 9, "")
        } else {
            template = template.replace("{whois}", "")
            template = template.replace("{/whois}", "")
            template = template.replace("{whois-data}", this.generateTable(this.whois))
        }
        return template
    }

    isWhoisEmpty() {
        let isEmpty = true
        Object.values(this.whois).forEach((item) => {
            if (typeof item === "string" && item.length > 0) {
                isEmpty = false
            }
            if (typeof item === "object") {
                Object.values(item).forEach((it) => {
                    if (typeof it === "string" && it.length > 0) {
                        isEmpty = false
                    }
                });
            }
        });
        return isEmpty
    }




    generateTable(content: any): string {
        let table = ''
        for (let [key, value] of Object.entries(content)) {
            if (typeof value === "object") {
                value = JSON.stringify(value);
            }
            if (this.reportType == ReportType.HTML) {
                table = table + `<tr><td>${key}</td><td>${value}</td></tr>`;
            } else {
                table = table + `|   ${key}   |   ${value}    |\n`
            }
        }
        return table
    }
}