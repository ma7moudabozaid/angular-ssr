import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Category } from "../models/category";

@Injectable({
  providedIn: "root",
})
export class CategoryService {

  apiUrl: string = environment.apiUrl + "category/";
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "get").pipe(
      tap((_) => console.log("fetched categories")),
      catchError((error: Error) => {
        return throwError(error);
      })
    );
  }
  addCategory(payload: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl + "add", payload);
  }

  updateCategory(category: Category, id: string): Observable<Category> {
    return this.http.put<Category>(this.apiUrl + "update/" + id, category);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(this.apiUrl + "delete/" + id);
  }
}
