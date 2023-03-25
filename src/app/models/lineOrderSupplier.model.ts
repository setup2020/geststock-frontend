import { ISupplier } from "./supplier.model";

export interface ILineOrderSupplier{
    id?:number;
    quantity?:number;
    price?:number;
    remise?:number,
    tva?:number
}

export enum STATUS_ORDER_SUPPLIER{
    PENDING="PENDING",
    PREPARATION="PREPARATION",
    VALID="VALID",
    LIVREE="LIVREE"
}

export interface IOrderSupplier{
    id?:number;
    reference?:string;
    dateOrder?:string;
    supplier?:ISupplier,
    status?:STATUS_ORDER_SUPPLIER;
    rabais?:number;
    description?:string;
}

export class OrderSupplier implements IOrderSupplier{
    constructor(
        public id?:number,
        public reference?:string,
        public dateOrder?:string,
        public supplier?:ISupplier,
        public status?:STATUS_ORDER_SUPPLIER,
        public rabais?:number,
        public description?:string
    ){}
}