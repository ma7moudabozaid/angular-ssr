import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiUrl: string = environment.apiUrl + "product/";
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "get").pipe(
      tap((_) => console.log("fetched products")),
      catchError((error: Error) => {
        return throwError(error);
      })
    );
  }
  addProduct(payload: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + "add", payload);
  }

  updateProduct(product: Product, id: string): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + "update/" + id, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + "delete/" + id);
  }
}
