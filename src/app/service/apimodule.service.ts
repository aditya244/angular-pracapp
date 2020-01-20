import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApimoduleService {

  private url: string = "../../assets/data/employee-data.json";

  constructor(private http: HttpClient) { }

  getApiData(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
}
