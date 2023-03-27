export interface IAuth{
    username:string;
    password:string;
    grantType:string
}

export class Auth implements IAuth{
    constructor(
        public username:string,
        public password:string,
        public grantType:string
    ){}
}