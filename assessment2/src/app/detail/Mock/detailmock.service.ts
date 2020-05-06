import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailmockService {

  constructor() { }
  getEmployees():Array<{}>{
    return[
      {
        location:'chennai',
        phone:'9999999999',
        background:'CS'
      }
    ];
  }
}
