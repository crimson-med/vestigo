
export default class VestigoResponse {
    url: string;
    success: boolean;
    method: string;
    headers: object;
    status: number;
    statusText: string;
    date: string;
    urls: Array<string>;
    pathsDisclosed: Array<string>;
    constructor(payload: {url: string, success: boolean, method: string, headers: object, status: number, statusText: string, date: string, urls: Array<string>}) {
        this.url = payload.url;
        this.success = payload.success;
        this.method = payload.method;
        this.headers = payload.headers;
        this.status = payload.status;
        this.statusText = payload.statusText;
        this.date = payload.date;
        this.urls = payload.urls;
        this.pathsDisclosed = [];
    }
}