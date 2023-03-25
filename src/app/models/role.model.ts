export interface IRole {
    id?: number | null;
    name: string;
    status: string
}


export class Role implements IRole {
    constructor(
        public name: string,
        public status: string,
        public id?: number | null,
    ) {

    }
}

export enum STATUS{
    DISABLE="DISABLE",
    ENABLE="ENABLE"
}