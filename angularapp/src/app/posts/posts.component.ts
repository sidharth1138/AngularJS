import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from '../idata';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public response:Observable<Idata[]>;
  
  constructor(public service:SharedService) {
    this.response=this.service.getPosts();
   }

  ngOnInit(): void {
  }

}
