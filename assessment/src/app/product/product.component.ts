import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // name:string
  // manufdate
  // expdate
  // brand:string
  // price:number
  constructor(private authService:AuthService,private router:Router) { }
  // onclick(){
  //   this.route.logout()
  // }
  product=[
    {name:'Bread',manufdate:22/2/2015,expdate:1/8/2015,brand:'Britania',price:50},
    {name:'Chips',manufdate:22/2/2015,expdate:1/8/2015,brand:'Lays',price:10},
    {name:'Biscuit',manufdate:22/2/2015,expdate:1/8/2015,brand:'Britania',price:10},
    {name:'IceCream',manufdate:22/2/2015,expdate:1/8/2015,brand:'Arun',price:10},
    {name:'Butter',manufdate:22/2/2015,expdate:1/8/2015,brand:'MilkyMist',price:30}




  ]
  // productlist:Array<any>
  ngOnInit(): void {
    
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
