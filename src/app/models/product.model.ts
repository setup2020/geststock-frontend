import { AbstractEntity } from "./abstractEntity.model";
import { ICategory } from "./category.model";

export interface IProduct extends AbstractEntity{
    id?:number,
    reference?:string,
    designation?:string,
    priceUnitTtc?:number,
    photo?:string,
    category?:ICategory
    priceUnitHt?:number
}

export class Product implements IProduct{

    constructor(
       public id?:number,
       public reference?:string,
       public designation?:string,
       public priceUnitTtc?:number,
       public priceUnitHt?:number,
       public category?:ICategory,
       
    ){}
}