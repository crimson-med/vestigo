import VestigoResponse from './../classes/response'
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
        console.log(` --- Successfull Urls:`);
        const successUrls = this.requestSuccess.map(e => e.url);
        successUrls.forEach(e => {
            console.log(` ------ ${chalk.cyan(e)}`);
        })
        //TODO: add verbose
    }

    getUrlsSuccess() {
        let result:string[] = [];
        if (this.requestSuccess.length > 0) {
            result = this.requestSuccess.map(e => e.url);
        }
        return result;
    }

    getUrlsFail() {
        let result:string[] = [];
        if (this.requestFail.length > 0) {
            result = this.requestFail.map(e => e.url);
        }
        return result;
    }

    getAllPathsDisclosures() {
        let paths: string[] = [];
        this.requestSuccess.map(e => paths.push(...e.pathsDisclosed))
        this.requestFail.map(e => paths.push(...e.pathsDisclosed))
        return [... new Set(paths)];
    }
}