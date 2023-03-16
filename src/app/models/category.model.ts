export interface ICategory {
    id?: number | null;
    name: string;
    code: string;
    description: string
}


export class Category implements ICategory {
    constructor(
        public name: string,
        public code: string,
        public description: string,
        public id?: number | null,
    ) {

    }
}