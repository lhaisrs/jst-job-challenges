import { Injectable } from '@angular/core';
import { FactModel } from '../models/fact.model';
import { FactRepository } from 'src/app/data/repository/fact.repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FactUsecase {
    constructor(private factRepository: FactRepository) {}

    execute(): Observable<FactModel[]> {
        return this.factRepository.getFacts();
    }
}