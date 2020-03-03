import {shortList, longList} from '../resources/endpoints';
import * as crimsonProgressBar from 'crimson-progressbar';
import axios, { AxiosResponse, AxiosError } from 'axios';
import VestigoResponse from '../classes/response';
import IntenseScan from '../classes/intenseScan';
import Axios from 'axios';
export const intenseScan = async (target: string, shortlist = true, parameters = true ) => {
    let endpoints = '';
    if (shortlist) {
        endpoints = shortList;
    } else {
        endpoints = longList;
    }
    const values = endpoints.split('\n');
    let counter = 0;
    console.log(" - Running intense scan")
    let promises: any[] = [];
    values.forEach((element): any => {
        promises.push(axios.get(target+element));
        if (parameters) {
            promises.push(axios.get(target+element+'/0'));
            promises.push(axios.get(target+element+'/1'));
            promises.push(axios.get(target+element+'/10'));
        }
    })
    const promisesResolved = promises.map(promise => promise.catch((error: any) => ({ error })))

    const checkFailed = (then: { ([someUrl, anotherUrl]: any): void; (arg0: any): any; }) => {
        return function (responses: any[]) {
            const someFailed = responses.some((response: { error: any; }) => response.error)

            if (someFailed) {
                throw responses
            }

            return then(responses)
        }
    }

    const scanData = (payload: string) => {
        // regex for urls
        const str: any = payload.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
        // regex for paths
        const str2: any = payload.match(/\/.*\.[\w:]+/g);
        let results = [];
        if (str?.length > 0) {
            results.push(...str);
        }
        if (str2?.length > 0) {
            results.push(...str2);
        }
        return results;
    }

   return await axios.all(promisesResolved)
        .then(checkFailed(([someUrl, anotherUrl]: any) => {
            console.log('SUCCESS', someUrl, anotherUrl)
            console.log("SUCCESS: "+someUrl.length+" / "+ values.length);
            return new IntenseScan();
        }))
        .catch((err) => {
            //console.log("FAILED: "+err.length+" / "+ promises.length);
            //console.log('FAIL', err[0])
            let success = 0;
            let fail = 0;
            let round = 0;
            let pathsDisclosed: any[] = [];
            let results: VestigoResponse[] = [];
            err.forEach((elem: AxiosResponse | any) => {
                let pathed = [];
                let result: VestigoResponse;
                if (elem.status && validateStatus(elem.status)) {
                    if (elem.data && elem.data !== "") {
                        pathed = scanData(elem.data)
                    }
                    result = new VestigoResponse({
                        url: elem?.config?.url as string,
                        success: true,
                        method: elem?.config?.method as string,
                        headers: elem?.headers as object,
                        status: elem?.status as number,
                        statusText: elem?.statusText as string,
                        date: elem?.headers?.date as string,
                        urls: pathed
                    })
                    success++;
                } else {
                    fail++;
                    if (elem?.error?.response?.data && elem.error.response.data.length > 0) {
                        pathed = scanData(elem.error.response.data)
                    }
                    result = new VestigoResponse({
                        url: elem?.error?.response?.config?.url as string,
                        success: false,
                        method: elem?.error?.response?.config?.method as string,
                        headers: elem?.error?.response?.headers as object,
                        status: elem?.error?.response?.status as number,
                        statusText: elem?.error?.response?.statusText as string,
                        date: elem?.error?.response?.headers?.date as string,
                        urls: pathed
                    })
                }
                if (pathed) {
                    result.pathsDisclosed = pathed;
                    pathsDisclosed.push(...pathed);
                }
                round++;
                results.push(result);
            });
            pathsDisclosed = [...new Set(pathsDisclosed)];
            const resultsSuccess: VestigoResponse[] = results.filter(e => e.success == true);
            const resultsFail: VestigoResponse[] = results.filter(e => e.success == false);
            const final = new IntenseScan(fail, success, err.length, resultsSuccess, resultsFail);
            return final;
            console.log(pathsDisclosed);
            console.log(`SUCC ${success}`)
            console.log(`FAIL ${fail}`)
            console.log(`TOTAL ${err.length}`)
            console.log(results);
        });
    /*values.forEach(async (element) => {
        //console.log(element)
        try {
            const test = await axios.get(target + element);
            console.log(test)
        } catch (error) {
            console.log(error)
        }

        crimsonProgressBar.renderProgressBar(counter, values.length);
        counter++;
    });*/
}
const validateStatus = (status: number) => {
    return status >= 200 && status < 300; // default
}