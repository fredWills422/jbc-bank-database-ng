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

}
