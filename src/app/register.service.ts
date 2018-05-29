import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://10.0.1.206:8080/computer-database-webservice/';

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + 'register/' + username + '/' + password, {responseType : 'text'});
  }

}
