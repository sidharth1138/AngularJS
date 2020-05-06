import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from './idata';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  public getPosts():Observable<Idata[]>
  {
    return this.http.get<Idata[]>
    ('https://jsonplaceholder.typicode.com/posts');
  }

}
