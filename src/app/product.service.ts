import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get(`${environment.apiURL}/api/products`);
  }

  getProductByProductId(productId):Observable<any>{
    return this.http.get(`${environment.apiURL}/api/products/${productId}`)
  }
}
