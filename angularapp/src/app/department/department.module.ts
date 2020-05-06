import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'employee', component: EmployeeComponent }
    ])
  ]
})
export class DepartmentModule { }
