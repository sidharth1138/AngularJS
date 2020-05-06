import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id;
  observerId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit()  {

    this.id=this.route.snapshot.params.id;

    this.route.paramMap.subscribe( para=> {
      this.observerId=para.get('id');
    });
  }

}
