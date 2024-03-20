import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductExportModel} from "../models/ProductExportModel";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

getProducts(): Observable<ProductExportModel[]> {
    return this.http.get<ProductExportModel[]>('https://fakestoreapi.com/products');
  }

  getProductById(string: string): Observable<ProductExportModel> {
    return this.http.get<ProductExportModel>('https://fakestoreapi.com/products/' + string);
  }
}
