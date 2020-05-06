import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;


  constructor(private authservice: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  // onclick(){
  //   this.service.login()
  // }

  // admin:Admin;

  ngOnInit() {

    // this.admin=new Admin({
    // email:'',pwd:''

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authservice.login();
    this.router.navigateByUrl('/admin');
  }

}


