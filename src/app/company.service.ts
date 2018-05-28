import {Injectable} from '@angular/core';
import {Company} from './company.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  //private baseUrl = 'http://10.0.1.206:8080/computer-database-webservice/';
  private baseUrl = 'http://localhost:8080/computer-database-webservice';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + '/companies/');
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(this.baseUrl + '/companies/' + id);
  }

  addCompany(company: Company): Observable<any> {
    return this.http.post<Company>(this.baseUrl + '/companies/', company);
  }

  updateCompany(company: Company): Observable<any> {
    return this.http.put<Company>(this.baseUrl + '/companies/', company);
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/companies/' + id);
  }

}
