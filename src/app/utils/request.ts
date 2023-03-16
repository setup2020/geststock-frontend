import { HttpParams } from "@angular/common/http";

export class Pagination {
    page?: number;
    size?: number;
}

export const createRequestOption = (req?: any): HttpParams => {

    let options: HttpParams = new HttpParams();
    if (req) {
        Object.keys(req).forEach((key) => {
            if (key !== 'sort') {
                options = options.set(key, req[key])
            }
        });

        if (req.sort) {
            req.sort.forEach((val: string) => {
                options = options.append('sort', val);
            });
        }
    }

   
    return req;

}