import { Command, flags } from '@oclif/command'
import axios, { AxiosResponse } from 'axios';
import * as chalk from 'chalk';
import Report, { ReportType } from '../classes/report';
import {intenseScan} from '../tools/scanTools';
import IntenseScan from '../classes/intenseScan';
import * as https from 'https';
import {formatDate} from '../tools/dateFormatter';
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// TODO: get path disclosures for basic get
// TODO: set the ssl header on a flag
// TODO: detect and render in the report if bad ssl check
// TODO: add whois
// TODO: add OS analysis from path disclosure
// TODO: add port scan (known ports)
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
export default class Scan extends Command {

    static description = 'Scan an API'
    static examples = [
        `$ scan --target="https://127.0.0.1/" --method="GET" --no-shortlist --report="HTML"`,
    ]
    static flags = {
        help: flags.help({ char: 'h' }),
        target: flags.string({ char: 't', description: 'target to scan', required: true }),
        method: flags.enum({char: 'm', description: 'requet methods can be: GET, POST, BOTH', required: false, options: ["GET", "POST", "BOTH"], default: "POST" }),
        shortlist: flags.boolean({ char: 's', description: 'use the shortlist for endpoints', required: true, default: true, allowNo: true}),
        parameters: flags.boolean({ char: 'p', description: 'use extra parameters on endpoints', required: true, default: true, allowNo: true}),
        report: flags.enum({ char: 'r', description: 'type of report to generate', required: true, default: "MD", options: ["MD", "HTML"]}),
    }

    async run() {
        // Get start date
        const startDate = new Date();
        // Load args and flags
        const { args, flags } = this.parse(Scan)
        // Fix url with end slash
        flags.target = (flags.target.charAt(flags.target.length - 1) !== "/") ? flags.target+'/' : flags.target ;
        // Convert string report typ to actual type
        const reportType = (flags.report === "MD") ? ReportType.MARKDOWN : ReportType.HTML;
        // Logging
        console.log(flags.method);
        console.log(` - ${chalk.green(formatDate(startDate, "dddd dd MMMM yyyy hh:mm"))}`)
        console.log(` - Targetting: ${chalk.cyan(flags.target)}`)
        let init: any = null;
        // init report
        const finalReport = new Report(flags.target);
        // Try to contact base url
        try {
            // Disable SSL verification by default
            const agent = new https.Agent({  
                rejectUnauthorized: false
              });
            init = await axios.get(flags.target, { httpsAgent: agent });
        } catch (error) {
            if (error.code) {
                console.log(`Error code: ${error.code}`);
            } 
        }
        // If base url can be contacted start basic analysis
            // Init report
            if (init) {
                finalReport.loadFromResponse(init);
                if (this.validateStatus(init.status) == true) {
                    console.log(` - Successfully connected to target`)
                    console.log(` - Gathering basic header information`)
                    const result = new Report(init)
                    console.log(` - Target Powered by: ${chalk.cyan(result.poweredBy)}`)
                    console.log(` - Target Last Modified at: ${chalk.cyan(result.lastModified)}`)
                    if (result.cors == "*") {
                        console.log(` - Target ${chalk.cyan('Not CORS protected')}`)
                    } else {
                        console.log(` - Target ${chalk.cyan('Is CORS protected')}`)
                    }
                } else {
                    console.log(init)
                    console.log(init.status)
                }
            } else {
                console.log("plop")
            }
            // Init an intense scan
            let intenseResult: IntenseScan | void = await intenseScan(flags.target, flags.shortlist, flags.parameters, flags.method);
            // If init successfull
            if (intenseResult) {
                const endDate = new Date();
                // Set all report's information
                finalReport.target = flags.target;
                finalReport.flags = flags;
                finalReport.intenseScan = intenseResult;
                finalReport.startDate = startDate;
                finalReport.endDate = endDate;
                finalReport.elapsedSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
                // Export reports
                intenseResult.exportSummary();
                finalReport.exportSummary(reportType)
                console.log(` - ${chalk.green(formatDate(endDate, "dddd dd MMMM yyyy hh:mm"))}`)
                console.log(` - Time Elapsed: ${chalk.green(finalReport.elapsedSeconds)} seconds`)
            }
        //console.log(init);
    }

    validateStatus = (status: number) => {
        return status >= 200 && status < 300; // default
    }


}
