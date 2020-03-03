import VestigoResponse from '../classes/response'
import * as chalk from 'chalk';

export default class IntenseScan {
    fail: number;
    success: number;
    total: number;
    requestSuccess: VestigoResponse[];
    requestFail: VestigoResponse[];
    constructor(fail = 0, success = 0, total = 0, requestSuccess: VestigoResponse[] = [], requestFail: VestigoResponse[] = []) {
        this.fail = fail;
        this.success = success;
        this.total = total;
        this.requestSuccess = requestSuccess;
        this.requestFail = requestFail;
    }

    exportSummary() {
        console.log(` --- Successfull Requests: ${chalk.green(this.success)}`)
        console.log(` --- Failed Requests: ${chalk.green(this.fail)}`)
        console.log(` --- Total Requests: ${chalk.green(this.total)}`)
        console.log(chalk.green(` --- Successfull Urls`));
        const successUrls = this.requestSuccess.map(e => e.url);
        successUrls.forEach(e => {
            console.log(` ------ ${chalk.cyan(e)}`);
        })
        //TODO: add verbose
        // TODO: add compilation or urls / paths disclosures. (make sure compile all request + unique)
    }
}