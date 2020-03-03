import { Command, flags } from '@oclif/command'
import axios, { AxiosResponse } from 'axios';
import * as chalk from 'chalk';
import Report from '../classes/report';
import {intenseScan} from '../tools/scanTools';
import IntenseScan from '../classes/intenseScan';
export default class Scan extends Command {
    static description = 'Scan an API'

    static examples = [
        `$ vestigo scan --target="http://127.0.0.1"`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        target: flags.string({ char: 't', description: 'target to scan', required: true }),
        shortlist: flags.boolean({ char: 's', description: 'use the shortlist for endpoints', required: true, default: true, allowNo: true}),
        parameters: flags.boolean({ char: 'p', description: 'use extra parameters on endpoints', required: true, default: true, allowNo: true}),
    }

    static args = [{ name: 'file' }]

    async run() {
        const { args, flags } = this.parse(Scan)
        console.log(` - Targetting: ${chalk.cyan(flags.target)}`)
        let init: any;
        try {
            init = await axios.get(flags.target);

        } catch (error) {
            //console.log(error)
        }
        if (init) {
            if (this.validateStatus(init.status) == true) {
                console.log(` - Successfully connected to target`)
                console.log(` - Gathering basic header information`)
                //console.log(` - Gathering path disclosures`)
                // TODO: get path disclosures for basic get
                const result = new Report(init)
                console.log(` - Target Powered by: ${chalk.cyan(result.poweredBy)}`)
                console.log(` - Target Last Modified at: ${chalk.cyan(result.lastModified)}`)
                if (result.cors == "*") {
                    console.log(` - Target ${chalk.cyan('Not CORS protected')}`)
                } else {
                    console.log(` - Target ${chalk.cyan('Is CORS protected')}`)
                }
            }
        }
        console.log(flags.shortlist);
        let intenseResult: IntenseScan | void = await intenseScan(flags.target, flags.shortlist, flags.parameters);
        if (intenseResult) {
            intenseResult.exportSummary();
        }
        //console.log(init);
    }

    validateStatus = (status: number) => {
        return status >= 200 && status < 300; // default
    }


}
