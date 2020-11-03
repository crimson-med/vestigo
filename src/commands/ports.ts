import { Command, flags } from '@oclif/command'
import axios, { AxiosResponse } from 'axios';
import * as chalk from 'chalk';
import Report, { ReportType } from './../classes/report';
import { intenseScan } from './../tools/scanTools';
import IntenseScan from './../classes/intenseScan';
import * as https from 'https';
import { formatDate } from './../tools/dateFormatter';
import * as whois from 'whois-json';
import { extractHostname, isValidDomain } from './../tools/urlHandler';
import { FileHandler } from '@argus-inc/fluct';
import { port, ports } from '../resources/ports';
import { tcpTester } from '../tools/tcpTester';
import { getPort } from '../tools/portHandler';
const fs = new FileHandler('.vestigo');
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// TODO: get path disclosures for basic get
// TODO: set the ssl header on a flag
// TODO: detect and render in the report if bad ssl check
// TODO: add OS analysis from path disclosure
// TODO: add port scan (known ports)
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
export default class Ports extends Command {

    static description = 'Scan an for open Ports'
    static examples = [
        `$ ports --target="127.0.0.1" --protocol="TCP" --report="HTML"`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        protocol: flags.enum({ char: 'p', description: 'port protocol can be: TCP, UDP, BOTH', required: false, options: ["TCP", "UDP", "BOTH"], default: "TCP" }),
        //output: flags.string({ char: 'o', description: 'specify the ouput directory' }),
        report: flags.enum({ char: 'r', description: 'type of report to generate', required: true, default: "MD", options: ["MD", "HTML"] }),
        target: flags.string({ char: 't', description: 'target to scan', required: true }),
    }

    async run() {
        // Get start date
        const startDate = new Date();
        // Load args and flags
        const { args, flags } = this.parse(Ports)
        // Fix url with end slash
        if (!isValidDomain(flags.target)) {
            console.log(`Target should be a valid IP or domain`)
        }
        // Convert string report typ to actual type
        const reportType = (flags.report === "MD") ? ReportType.MARKDOWN : ReportType.HTML;
        console.log(flags.protocol);
        console.log(` - ${chalk.green(formatDate(startDate, "dddd dd MMMM yyyy hh:mm"))}`)
        console.log(` - Targetting: ${chalk.cyan(flags.target)}`)
        let init: any = null;
        let toSettle = []
        for (let [key, value] of Object.entries(ports)) {
            if (Array.isArray(value) && value[0]) {
                value = value[0]
            }
            const targetPort = getPort(key)
            if (targetPort) {
                if ((flags.protocol === "TCP" || flags.protocol === "BOTH") && targetPort.tcp) {
                    toSettle.push(tcpTester(flags.target, targetPort.port))
                }
            }

        }
        await Promise.allSettled(toSettle).then((results) => results.forEach((result) => {
            if (result.status === "fulfilled") {
                const opPort = getPort(result.value.port)
                if (opPort) {
                    console.log(` - Open Port: ${chalk.green(opPort.port)} possible service is: ${opPort.description}`)
                }
            }
        }));
    }

    validateStatus = (status: number) => {
        return status >= 200 && status < 300; // default
    }

}
