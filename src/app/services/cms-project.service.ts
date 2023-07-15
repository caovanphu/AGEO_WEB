import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from 'src/base/services/base.service';
import { ResponseResult } from 'src/base/models/response-result';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CmsProjectService extends BaseService {
    constructor(http: HttpClient, injector: Injector) {
        super(http, injector, `http://api.quantrac.vn/cms/CmsProject`);
    }

    find(model: any): Promise<ResponseResult|undefined> {
        const apiUrl = `${this.serviceUri}/Find`;
        return this._http
            .post<ResponseResult>(`${apiUrl}`, model).pipe(catchError(err => this.handleError(err, this._injector))).toPromise();
    }
}
