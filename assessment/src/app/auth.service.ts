// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private router:Router) { }

//   public login(){
//     this.router.navigateByUrl('product')
//   }

//   public logout(){
//     this.router.navigateByUrl('login')
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  public login() {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}