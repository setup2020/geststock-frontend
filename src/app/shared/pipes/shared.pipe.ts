import { Pipe, PipeTransform } from '@angular/core';
import { ILineOrderSupplier } from 'src/app/models/lineOrderSupplier.model';




@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(value: any): string {
    if (value && (value.firstName || value.lastName)) {
      return value?.firstName?value?.firstName:'' + ' ' + value?.lastName? value?.lastName:'';
    }
    return '--';
  }
}


@Pipe({ name: 'sizeFile' })
export class SizeFilePipe implements PipeTransform {
  transform(size: number): string {
    const fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    let fSize = size;
    let i = 0;
    while (fSize > 900) {
      fSize /= 1024;
      i++;
    }

    return Math.round(fSize * 100) / 100 + ' ' + fSExt[i];
  }
}


@Pipe({ name: 'PriceItem' })
export class PriceItemPipe implements PipeTransform {
  transform(data: ILineOrderSupplier,type:string): number {
      if(type==="ITEM"){
        return ( ( Number(data.price))+(Number(data.price)*Number(data.tva))/100)-Number(data.remise)
      }else if(type==="TOTAL"){
        return  Number(data.quantity)*(( ( Number(data.price))+(Number(data.price)*Number(data.tva))/100)-Number(data.remise))
      }else if(type==="TVA"){
        return  (Number(data.price)*Number(data.tva))/100 ;
      }

      return 0;
       
  }
}
