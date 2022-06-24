import{Injectable}from"@angular/core";
import{Observable} from'rxjs';

import{HttpClient}from'@angular/common/http';

@Injectable( {providedIn: 'root'} )

export class ProductosServices
{
    private API_SERVER="http://localhost:3031/api-test/products";

    constructor(public http:HttpClient){}
    
    public getProductos():Observable<any>
    {
        return this.http.get(this.API_SERVER);
    }
}   
        