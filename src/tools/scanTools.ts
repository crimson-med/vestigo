import {shortList as endpoints} from '../resources/endpoints';
import * as crimsonProgressBar from 'crimson-progressbar';
import axios from 'axios';
export const intenseScan = async (target: string) => {
    const values = endpoints.split('\n');
    let counter = 0;
    console.log(" - Running intense scan")
    let promises: any[] = [];
    promises.push(axios.get("https://google.com"));
    promises.push(axios.get("http://burletmederic.com"));
    values.forEach((element): any => {
        promises.push(axios.get(target+element));
    })
    const promisesResolved = promises.map(promise => promise.catch((error: any) => ({ error })))

    function checkFailed(then: { ([someUrl, anotherUrl]: any): void; (arg0: any): any; }) {
        return function (responses: any[]) {
            const someFailed = responses.some((response: { error: any; }) => response.error)

            if (someFailed) {
                throw responses
            }

            return then(responses)
        }
    }

    axios.all(promisesResolved)
        .then(checkFailed(([someUrl, anotherUrl]: any) => {
            console.log('SUCCESS', someUrl, anotherUrl)
            console.log("SUCCESS: "+someUrl.length+" / "+ values.length);

        }))
        .catch((err) => {
            //console.log("FAILED: "+err.length+" / "+ promises.length);
            //console.log('FAIL', err[0])
            let success = 0;
            let fail = 0;
            err.forEach(elem => {
                
                if (elem.status && validateStatus(elem.status)) {
                    if (elem.config && elem.config.url) {
                        console.log(elem.config.url)
                    }
                    success++;
                } else {
                    fail++;
                }
            });
            console.log(`SUCC ${success}`)
            console.log(`FAIL ${fail}`)
            console.log(`TOTAL ${err.length}`)

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