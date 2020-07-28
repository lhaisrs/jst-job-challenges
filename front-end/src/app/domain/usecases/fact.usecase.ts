import { Injectable } from '@angular/core';
import { FactModel } from '../models/fact.model';
import { FactRepository } from 'src/app/data/repository/fact.repository';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, switchMap, map, debounceTime, tap, take, mergeMap } from 'rxjs/operators';
import { FactType } from '../models/fact.type.enum';

const loadingTime = 1000;
const mostVoted = 10;

@Injectable({
    providedIn: 'root'
})

export class FactUsecase {

    public busy$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public list$: Observable<FactModel[]>;

    constructor(private factRepository: FactRepository) { }

    fetch(): Observable<FactModel[]> {
        this.list$ = this.factRepository.getFacts();
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

    loading(): Observable<boolean> {
        return this.busy$.pipe(
            debounceTime(loadingTime),
            tap(_ => this.busy$.next(false))
        );
    }

    sort() {
        return this.list$.pipe(
            map(facts => facts.sort().slice(0, mostVoted))
        );
    }
}
