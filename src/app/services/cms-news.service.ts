import { Injectable, Injector } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BaseService } from 'src/base/services/base.service';
import { ResponseResult } from 'src/base/models/response-result';
import {catchError, retry, shareReplay} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class CmsNewsService extends BaseService {
    constructor(http: HttpClient, injector: Injector) {
        super(http, injector, `http://api.ageo.vn/cms/cmsnews`);
    }

    find(model: any): Promise<ResponseResult|undefined> {
        const apiUrl = `${this.serviceUri}/Find`;
        return this._http
            .post<ResponseResult>(`${apiUrl}`, model).pipe(catchError(err => this.handleError(err, this._injector))).toPromise();
    }
    getNewsDetail(id: any): Observable<ResponseResult | undefined> {
      return this._http.get<ResponseResult>(`${this.serviceUri}/${id}`);
    }
}
