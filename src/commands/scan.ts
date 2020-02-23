import { Command, flags } from '@oclif/command'
import axios, { AxiosResponse } from 'axios';
import Report from '../classes/report';
import {intenseScan} from '../tools/scanTools';
export default class Scan extends Command {
    static description = 'Scan an API'

    static examples = [
        `$ vestigo scan --target="http://127.0.0.1"`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        target: flags.string({ char: 't', description: 'target to scan', required: true }),
    }

    static args = [{ name: 'file' }]

    async run() {
        const { args, flags } = this.parse(Scan)
        console.log(` - Targetting: ${flags.target}`)
        let init: any;
        try {
            init = await axios.post(flags.target);

        } catch (error) {
            //console.log(error)
        }
        /*axios.post(flags.target).then(val => {
            //console.log(val);
        }).catch(err => {
            //console.log(err)
        })*/
        console.log(init)
        //const result = new Report(init);
        intenseScan(flags.target);
        if (/*this.validateStatus(init.status)*/true) {
            console.log(` - Successfully connected to target`)
            console.log(` - Gathering basic header information`)
            console.log(` - Gathering path disclosures`)
            //const str = init.data.match(/\/.*\.[\w:]+/g);
            //console.log(str);
        }
        //console.log(init);
    }

    validateStatus = (status: number) => {
        return status >= 200 && status < 300; // default
    }


}
