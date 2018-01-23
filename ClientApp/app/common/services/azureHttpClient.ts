import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable()
export class AzureHttpClient {
    constructor(private http: Http) {}
    get(url: string, apiKey: string) {
        let headers = new Headers();
        headers.append('90c016b9e9774cc0afd34b6de42f9f27', apiKey);
        return this.http.get(url, {
            headers: headers
        });
    }
    post(url:string, apiKey:string, data:string) {
        let headers = new Headers();
        headers.append('90c016b9e9774cc0afd34b6de42f9f27', apiKey);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}