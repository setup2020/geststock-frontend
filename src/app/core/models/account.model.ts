export class Account{
    constructor(
        public authorities:string[],
        public email:string,
        public lastName:string,
        public firstName:string,
        public username:string
    ){}
}

export enum UserType{
    ADMIN="ADMIN"
}