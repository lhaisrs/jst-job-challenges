import { Injectable } from '@angular/core';
import { FactModel } from '../models/fact.model';
import { FactRepository } from 'src/app/data/repository/fact.repository';
import { Observable } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { FactType } from '../models/fact.type.enum';

@Injectable({
    providedIn: 'root'
})

export class FactUsecase {

    public busy: boolean;
    public list$: Observable<FactModel[]>

    constructor(private factRepository: FactRepository) { }

    fetch(): Observable<FactModel[]> {
        this.busy = true;
        this.list$ = this.factRepository.getFacts();
        this.busy = false;
        return this.list$;
    }

    filterByType() {
        this.list$.pipe(
            switchMap(facts => facts),
            map(fact => fact),
            filter(item => item.entity.type === FactType.cat)
        );

        this.list$.pipe(
            switchMap(facts => facts),
            map(fact => fact),
            filter(item => item.entity.type === FactType.dog)
        );
    }
}
