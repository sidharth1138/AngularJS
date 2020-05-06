import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edata } from './edata';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  constructor(private http:HttpClient) { }

  public getPosts():Observable<Edata[]>
  {
    return this.http.get<Edata[]>
    ('http://dummy.restapiexample.com/api/v1/employees');
  }

}
