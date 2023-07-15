import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from 'src/base/services/base.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends BaseService {
    constructor(http: HttpClient, injector: Injector) {
        super(http, injector, `http://api.quantrac.vn/cms/categories`);
    }
    getTreeByIdParent(idParent = 0, status: number = 1, includeParent: boolean = true,) {
        const queryString = `${this.serviceUri}/GetTreeByIdParent/${idParent}/${status}/${includeParent}`;
        console.log(queryString);
        return this.defaultGet(queryString);
    }

    getTreeTableByIdParent(idParent: number, useCache: boolean = true, includeParent: boolean = true) {
        const queryString = `${this.serviceUri}/GetTreeTableByIdParent/${idParent}/${useCache}/${includeParent}`;
        console.log(queryString);
        return this.defaultGet(queryString);
    }
}
