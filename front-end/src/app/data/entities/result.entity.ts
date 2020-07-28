/*
    ResultEntity: Recebe os dados do retorno da requisição de CatFactsAPI
*/

import { FactEntity } from './fact.entity';

export interface ResultEntity {
    all: FactEntity[];
}
