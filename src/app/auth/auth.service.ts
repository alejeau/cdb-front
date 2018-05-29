import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl = '';

  baseUrl = 'http://localhost:8080/computer-database-webservice/';

  logoutSuccess = 'true';

  role: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body =  { 'username' : username, 'password' : password }
    return this.http.post(this.baseUrl + 'login', body, { headers: headers, responseType: 'text' });

  }

  logout(): void {
    this.logoutSuccess = 'true';
    console.log('AuthService logout removing token from localStorage');
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    console.log('Local Storage get token ', localStorage.getItem('token'));
    console.log(localStorage.getItem('token') === null);
    return !(localStorage.getItem('token') === null);
  }

  getToken(): string {
    return (localStorage.getItem('token'));
  }

  getRole(): Observable<string> {
    const token = localStorage.getItem('token');
    return this.http.get(this.baseUrl + 'role/' + token, {responseType : 'text'});
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }

  isUser(): boolean{
    return localStorage.getItem('role') === 'USER';
  }



}


