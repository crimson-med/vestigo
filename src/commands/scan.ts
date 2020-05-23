import { Command, flags } from '@oclif/command'
import axios, { AxiosResponse } from 'axios';
import * as chalk from 'chalk';
import Report, { ReportType } from './../classes/report';
import {intenseScan} from './../tools/scanTools';
import IntenseScan from './../classes/intenseScan';
import * as https from 'https';
import {formatDate} from './../tools/dateFormatter';
import  * as whois  from 'whois-json';
import { isValidDomain } from './../tools/urlHandler';
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// TODO: get path disclosures for basic get
// TODO: set the ssl header on a flag
// TODO: detect and render in the report if bad ssl check
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
        method: flags.enum({char: 'm', description: 'requet methods can be: GET, POST, BOTH', required: false, options: ["GET", "POST", "BOTH"], default: "POST" }),
        output: flags.string({char: 'o', description: 'specify the ouput directory'}),
        parameters: flags.boolean({ char: 'p', description: 'use extra parameters on endpoints', required: true, default: true, allowNo: true}),
        report: flags.enum({ char: 'r', description: 'type of report to generate', required: true, default: "MD", options: ["MD", "HTML"]}),
        shortlist: flags.boolean({ char: 's', description: 'use the shortlist for endpoints', required: true, default: true, allowNo: true}),
        target: flags.string({ char: 't', description: 'target to scan', required: true }),
        whois: flags.boolean({char: 'w', description: 'perform who is request on the target', required: true, default: false, allowNo: true})
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

        if (flags.whois === true) {
            if (isValidDomain(flags.target)) {
                console.log(` - ${chalk.green('WHOIS VALID:')} supplied target is a valid domain, executing whois.`)
                const whoisData = await whois(flags.target)
                if (whoisData.error) {
                    if (whoisData.note) {
                        console.log(` - ${chalk.red('WHOIS ERROR:')} ${whoisData.note}.`)
                    }
                    console.log(` - ${chalk.red('WHOIS ERROR:')} ${whoisData.error}.`)
                } else {
                    finalReport.whois = finalReport.initWhois(whoisData);
                }
            } else {
                console.log(` - ${chalk.red('WHOIS ERROR:')} supplied target is not a valid domain.`)
            }
        }

        // If base url can be contacted start basic analysis
            // Init report
            if (init) {
                finalReport.loadFromResponse(init);
                if (this.validateStatus(init.status) == true) {
                    console.log(` - Successfully connected to target`)
                    console.log(` - Gathering basic header information`)
                    console.log(` - Target Powered by: ${chalk.cyan(finalReport.poweredBy)}`)
                    console.log(` - Target Last Modified at: ${chalk.cyan(finalReport.lastModified)}`)
                    if (finalReport.cors == "*") {
                        console.log(` - Target ${chalk.cyan('Not CORS protected')}`)
                    } else {
                        console.log(` - Target ${chalk.cyan('Is CORS protected')}`)
                    }
                } else {
                    console.log(init)
                    console.log(init.status)
                }
            } else {
                console.log(` - Couldn't connect to base target`)
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
                // command line report
                intenseResult.exportSummary();
                // file report
                finalReport.exportSummary(reportType, flags.output)
                console.log(` - ${chalk.green(formatDate(endDate, "dddd dd MMMM yyyy hh:mm"))}`)
                console.log(` - Time Elapsed: ${chalk.green(finalReport.elapsedSeconds.toString())} seconds`)
            }
        //console.log(init);
    }

    validateStatus = (status: number) => {
        return status >= 200 && status < 300; // default
    }


}
