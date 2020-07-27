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
