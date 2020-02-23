import { AxiosResponse } from 'axios';

export default class Report {
    poweredBy: string;
    cors: string;
    lastModified: string;
    contentType: string;
    constructor(response: AxiosResponse) {
        console.log(response.headers);
        this.poweredBy = (response.headers['x-powered-by']) ? response.headers['x-powered-by'] : '';
        this.cors = (response.headers['access-control-allow-origin']) ? response.headers['access-control-allow-origin'] : '';
        this.lastModified = (response.headers['last-modified']) ? response.headers['last-modified'] : '';
        this.contentType = (response.headers['content-type']) ? response.headers['content-type'] : '';
    }

    exportSummary() {
        
    }
}