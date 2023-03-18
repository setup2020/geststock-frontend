import { IAddress } from "./address.model";

export interface ICustomer{
    id?:number | null;
    lastName:string;
    firstName?:string;
    photo?:string;
    address?:IAddress;
    code?:string;
    email?:string;
    phone?:string
    description?:string
}

export class Customer implements ICustomer{

    constructor(
        public lastName:string,
        public firstName?:string,
        public email?:string,
       
        public photo?:string,
        public code?:string,
        public address?:IAddress,
        public phone?:string,
        public id?:null | number
    ){}
}