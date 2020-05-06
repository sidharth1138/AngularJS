import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  text = ' Detail Page : ';
  employees;
  received=false;

  constructor(private detailService: DetailService) {
   // this.employees = this.detailService.getEmployees();
      this.formReceived();
  }

  formReceived(){
    this.employees = this.detailService.getEmployees();
    this.received=true;
  }

}
