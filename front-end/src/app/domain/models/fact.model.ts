import { FactEntity } from './../../data/entities/fact.entity';

export class FactModel {

    public readonly entity: Partial<FactEntity>;

    constructor(args: { entity: Partial<FactEntity> }) {
        this.entity = args.entity;
    }

    static decoder(entity: FactEntity): FactModel {
        return new FactModel({ entity });
    }
}
