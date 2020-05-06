import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor() { }
  getEmployees():Array<{}>{
    return[
      {
        location:'chennai',
        phone:'9999999999',
        background:'CS'
      },
      {
        location:'bangalore',
        phone:'8888888888',
        background:'IT'
      },
      {
        location:'mumbai',
        phone:'7777777777',
        background:'EEE'
      },
      {
        location:'delhi',
        phone:'6666666666',
        background:'ECE'
      },
      {
        location:'pune',
        phone:'5555555555',
        background:'MECH'
      }


    ];
  }
}
