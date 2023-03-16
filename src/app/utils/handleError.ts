import { throwError } from "rxjs";

export const  handleError=(error:any):any=>{
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      error=error.error.message;

    }else{
      errorMessage=`Error Code: ${error.status}\nMessage: ${error.message}`
    }

    window.alert(errorMessage);

    return throwError(()=>{
      return errorMessage;
    })
  }