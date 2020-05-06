import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name;
  observerName;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.name=this.route.snapshot.params.name;

    this.route.paramMap.subscribe( para=> {
      this.observerName=para.get('name');
    });
  }

}
