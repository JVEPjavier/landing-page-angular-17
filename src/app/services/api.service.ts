import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);

  private _urlBase:string = "https://fakestoreapi.com/products"

  getProducts():Observable<IProducto[]>{
    return this._http.get<IProducto[]>(this._urlBase)
  }

  getProductById(id:number):Observable<IProducto>{
    return this._http.get<IProducto>(`${this._urlBase}/${id}`)
  }
}
