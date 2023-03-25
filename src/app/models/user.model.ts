import { IAddress } from "./address.model";
import { IRole } from "./role.model";

export interface IUser{
    id?:number | null;
    lastName:string;
    firstName?:string;
    photo?:string;
    address?:IAddress;
    dateBirth?:string;
    email?:string;
    phone?:string;
    password?:string;
    roles?:IRole[];
}

export class User implements IUser{

    constructor(
        public lastName:string,
        public firstName?:string,
        public email?:string,
        public photo?:string,
        public dateBirth?:string,
        public address?:IAddress,
        public phone?:string,
        public password?:string,
        public roles?:IRole[],
        public id?:null | number
    ){}
}