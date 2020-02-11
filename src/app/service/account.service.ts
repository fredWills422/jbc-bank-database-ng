import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';

const url:string = "http://localhost:8080/accounts/"

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>
  }

  create(account: Account): Observable<JsonResponse>{
    return this.http.post(url, account) as Observable<JsonResponse>;
  }

  get(id:number): Observable<JsonResponse>{
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(account: Account): Observable<JsonResponse>{
    return this.http.put(url,account) as Observable<JsonResponse>;
  }

  delete(id:number): Observable<JsonResponse>{
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

}
