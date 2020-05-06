import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }


  product=[
    {name:'Bread',manufdate:22/2/2015,expdate:1/8/2015,brand:'Britania',price:50},
    {name:'Chips',manufdate:22/2/2015,expdate:1/8/2015,brand:'Lays',price:10},
    {name:'Biscuit',manufdate:22/2/2015,expdate:1/8/2015,brand:'Britania',price:10},
    {name:'IceCream',manufdate:22/2/2015,expdate:1/8/2015,brand:'Arun',price:10},
    {name:'Butter',manufdate:22/2/2015,expdate:1/8/2015,brand:'MilkyMist',price:30}
]

  ngOnInit(): void {
  }


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
