import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentsService:StudentsService) { }
  students=[];

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.students=this.studentsService.getStudents();
  }
}
