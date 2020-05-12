import {shortList, longList} from '../resources/endpoints';
import * as crimsonProgressBar from 'crimson-progressbar';
import axios, { AxiosResponse, AxiosError } from 'axios';
import VestigoResponse from '../classes/response';
import IntenseScan from '../classes/intenseScan';
import * as https from 'https';
export const intenseScan = async (target: string, shortlist = true, parameters = true, method: string ) => {
    let endpoints = '';
    // Load endpoint list
    if (shortlist) {
        endpoints = shortList;
    } else {
        endpoints = longList;
    }
    const values = endpoints.split('\n');
    let counter = 0;
    console.log(" - Running intense scan")
    let promises: any[] = [];
    // TODO: make a request queuing + proxy
    values.forEach((element): any => {
        const agent = new https.Agent({  
            rejectUnauthorized: false
          });
        // Loading all the requests
        if (method === "GET" || method === "BOTH") {
            promises.push(axios.get(target+element, { httpsAgent: agent }));
            if (parameters) {
                promises.push(axios.get(target+element+'/0', { httpsAgent: agent }));
                promises.push(axios.get(target+element+'/1', { httpsAgent: agent }));
                promises.push(axios.get(target+element+'/10', { httpsAgent: agent }));
            }
        } 
        if (method == "POST" || method === "BOTH") {
            promises.push(axios.post(target+element));
            if (parameters) {
                promises.push(axios.post(target+element+'/0', { httpsAgent: agent }));
                promises.push(axios.post(target+element+'/1', { httpsAgent: agent }));
                promises.push(axios.post(target+element+'/10', { httpsAgent: agent }));
            }
        }
        
    })
    // Map all promises
    const promisesResolved = promises.map(promise => promise.catch((error: any) => ({ error })))
    // HACK
    // Force check failed for the request
    // The issue with chained promises is if a request is not status 200 OK
    // It will break and wont finish the other requests.
    // Here we force all of them to be bad requests then they all arrive in the catch.
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
        if (typeof payload == "string") {
            // regex for urls
            const str: any = payload.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
            // regex for paths
            const str2: any = payload.match(/\/[a-zA-Z0-9\/\-_.]+\/[a-zA-Z0-9\/\-_.]+[^<>",:]/g);
            let results = [];
            // If we have regex match push them to array
            if (str?.length > 0) {
                results.push(...str);
            }
            if (str2?.length > 0) {
                results.push(...str2);
            }
            return results;
        }
    }
    // execute all the requests
   return await axios.all(promisesResolved)
        .then(checkFailed(([someUrl, anotherUrl]: any) => {
            return new IntenseScan();
        }))
        .catch((err) => {
            // init counters
            let success = 0;
            let fail = 0;
            let round = 0;
            let pathsDisclosed: any[] = [];
            let results: VestigoResponse[] = [];
            // For each request
            err.forEach((elem: AxiosResponse | any) => {
                let pathed = [];
                let result: VestigoResponse;
                // If the request is valid
                if (elem.status && validateStatus(elem.status)) {
                    // Check we have data 
                    if (elem.data && elem.data !== "") {
                        // Scan data for paths
                        pathed = scanData(elem.data) || []
                    }
                    // Build a clean response class with good information
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
                    // increment success counter
                    success++;
                } else {
                    // increment fail counter
                    fail++;
                    // Check we have data 
                    if (elem?.error?.response?.data && elem.error.response.data.length > 0) {
                        // Scan data for paths
                        pathed = scanData(elem.error.response.data) || []
                    }
                    // Build a clean response class with good information
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
            // Filter and create stuff
            pathsDisclosed = [...new Set(pathsDisclosed)];
            const resultsSuccess: VestigoResponse[] = results.filter(e => e.success == true);
            const resultsFail: VestigoResponse[] = results.filter(e => e.success == false);
            const final = new IntenseScan(fail, success, err.length, resultsSuccess, resultsFail);
            return final;
        });
}

// Simple HTTP status validation
const validateStatus = (status: number) => {
    return status >= 200 && status < 300; // default
}