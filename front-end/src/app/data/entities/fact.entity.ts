/*
    FactEntity: Entidade principal com os dados do fact
*/

export interface FactEntity {
    id: string;
    text: string;
    type: string;
    user: {
        id: string;
        name: {
            first: string;
            last: string;
        }
    };
    upvotes: number;
    userUpvoted: unknown;
}
