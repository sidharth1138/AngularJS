import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Edata } from '../edata';
import { Employee1Service } from '../employee1.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

  public response: Observable<Edata[]>;

  constructor(public service: Employee1Service) {

  }

  ngOnInit(): void {
    this.response = this.service.getPosts();
  }

}
