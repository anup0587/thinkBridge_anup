import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
private BASE_URL = `https://fakestoreapi.com/products`
  constructor(private http : HttpClient) { }

  getMethod(endPoint?):Observable<any>{
    return this.http.get(this.BASE_URL+endPoint)
  }
  putMethod(endPoint ,parseBody):Observable<any>{
    return this.http.put(this.BASE_URL+endPoint,parseBody)
  }
  patchMethod(endPoint ,parseBody):Observable<any>{
    return this.http.patch(this.BASE_URL+endPoint,parseBody)
  }
  postMethod(parseBody):Observable<any>{
    return this.http.post(this.BASE_URL,parseBody)
  }
  deleteMethod(endPoint):Observable<any>{
    return this.http.delete(this.BASE_URL+endPoint)
  }
}
