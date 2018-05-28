import {Injectable} from '@angular/core';
import {Computer} from './computer.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private baseUrl = 'http://10.0.1.206:8080/computer-database-webservice';

  constructor(private http: HttpClient) {
  }

  getComputersTotal(): Observable<number> {
    return this.http.get<number>(this.baseUrl + '/computers/total');
  }

  getComputersLimit(limit: number): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.baseUrl + '/computers/index/0/limit/' + limit);
  }

  getComputersByCompany(id: string): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.baseUrl + '/computers/company/' + id);
  }

  getComputerById(id: string): Observable<Computer> {
    return this.http.get<Computer>(this.baseUrl + '/computers/' + id);
  }

  addComputer(company: Computer): Observable<any> {
    return this.http.post<Computer>(this.baseUrl + '/computers/', company);
  }

  updateComputer(company: Computer): Observable<any> {
    return this.http.put<Computer>(this.baseUrl + '/computers/', company);
  }

  deleteComputer(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/computers/' + id);
  }

}
