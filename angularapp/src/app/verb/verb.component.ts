import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.css']
})
export class VerbComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(data => {
      console.log(data);
    });

    this.http.post(' http://dummy.restapiexample.com/api/v1/create',
      { "name": "test", "salary": "123", "age": "23" })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error Occured');
        }
      );
  }
}
