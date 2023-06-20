import { Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseResult } from '../models/response-result';
import { catchError, retry, shareReplay } from 'rxjs/operators';


export abstract class BaseService {
    _http: HttpClient;
    _injector: Injector;

    serviceUri = '';

    readonly RETRY_COUNT: number = 0;
    readonly REPLAY_COUNT: number = 1;
    readonly LIMIT_DEFAULT: number = 1000;

    constructor(
        http: HttpClient
        , injector: Injector
        , serviceUri: string
    ) {
        this._http = http;
        this._injector = injector;
        this.serviceUri = serviceUri;
    }

    getsBySearch(model: any): Promise<ResponseResult|undefined> {
        const apiUrl = `${this.serviceUri}/GetsBySearch`;
        return this._http
            .post<ResponseResult>(apiUrl, model)
            .pipe(catchError(err => this.handleError(err, this._injector))).toPromise();
    }

    getDetail(id: any): Promise<ResponseResult|undefined> {
        const url = `${this.serviceUri}/${id}`;
        return this.defaultGet(url);
    }

    post(item: any): Promise<ResponseResult|undefined> {
        return this._http
            .post<ResponseResult>(this.serviceUri, item)
            .pipe(catchError(err => this.handleError(err, this._injector))).toPromise();
    }

    put(id: string, item: any): Promise<ResponseResult|undefined> {
        const url = `${this.serviceUri}/${id}`;
        return this._http.post<ResponseResult>(url, item).toPromise();
    }

    delete(id: number): Promise<ResponseResult|undefined> {
        const url = `${this.serviceUri}/${id}`;
        return this._http.delete<ResponseResult>(url).toPromise();
    }

    deleteMany(lstId: string): Promise<ResponseResult|undefined> {
        const url = `${this.serviceUri}/DeleteMany/${lstId}`;
        return this._http.delete<ResponseResult>(url).toPromise();
    }

    defaultGet(apiUrl: string): Promise<ResponseResult|undefined> {
        return this._http.get<ResponseResult>(apiUrl)
            .pipe(
                shareReplay(this.REPLAY_COUNT),
                retry(this.RETRY_COUNT),
                catchError((err: HttpErrorResponse) => this.handleError(err, this._injector))
            ).toPromise();
    }

    async handleError(error: any, injector: Injector) {
        console.error('Có lỗi xảy ra', error);
        if (error.status === 401) {
            await window.location.reload();
        } else {
        }

        return Promise.reject(error);
    }
}
