import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './user-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apps';
  results = '';

  // todayDate = new Date();
  // jsonval = { name: 'SID', age: '21', address: { a1: 'SALEM', a2: 'INDIA' } };
  // months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  // arr=[1,2,3,4,5,6,7,8,9,10];

  constructor(private http: HttpClient) {

  }
  //HTTP  GET

  // ngOnInit(): void {
  //   this.http.get('https://swapi.co/api/people/?search=ab').toPromise()
  //     .then((data: any) => {
  //       this.results = data.results;
  //       console.log(this.results)
  //     });
  // }

  // ngOnInit(): void {
  //   this.http.get('https://api.github.com/users/abdullah').subscribe(data=>{
  //         console.log(data);
  //     });
  // }

  // ngOnInit(): void {
  //   this.http.get<UserResponse>('https://api.github.com/users/abdullah').subscribe(data=>{
  //         console.log("User Login :"+data.login);
  //         console.log("Bio : "+data.bio);
  //         console.log("Company : "+data.company);
  //     },
  //     err=>{
  //       console.log('Error Occured')   //no error in this case
  //     }
  //     );
  // }


  //HTTP POST

  // ngOnInit(): void {
  //   this.http.post('http://jsonplaceholder.typicode.com/posts',
  //     {
  //       title: 'sid',
  //       body: 'par',
  //       userId: 1
  //     })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error Occured');
  //       }
  //     );
  // }

  // HTTP PUT
  // ngOnInit(): void {
  //   this.http.post('http://jsonplaceholder.typicode.com/posts',
  //     {
  //       title: 'sid',
  //       body: 'par',
  //       userId: 1
  //     })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error Occured');
  //       }
  //     );

  //   this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
  //     { "name": "test1", "salary": "2222", "age": "23" })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error Occured');
  //       }
  //     );

  // }

// HTTP DELETE

/*
this.http.delete('')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error Occured');
        }
      );

*/

}
