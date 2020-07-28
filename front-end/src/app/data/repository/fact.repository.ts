import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FactModel } from 'src/app/domain/models/fact.model';
import { map, toArray, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ResultEntity } from '../entities/result.entity';

@Injectable({
    providedIn: 'root'
})
export class FactRepository {
    constructor(private http: HttpClient) { }

    getFacts(): Observable<FactModel[]> {
        return this.http.get<ResultEntity>(`${environment.apiUrl}/facts`)
            .pipe(
                map(item => item.all),
                mergeMap(factEntities => factEntities),
                map((entity) => new FactModel({ entity })),
                toArray()
            );
    }
}
