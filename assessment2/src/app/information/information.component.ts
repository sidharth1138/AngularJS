import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent  {

  
  text='Information Page :';
  informationForm:FormGroup;
  information={
    firstname:'',
    lastname:'',
    salary:'',
    street1:'',
    street2:'',
    location:''
  };
  submitted=false;

  constructor() { 
    this.createForm();
  }

  createForm(): void {
    this.informationForm=new FormGroup({
      'firstname':new FormControl(this.information.firstname,[
        Validators.required,
        Validators.minLength(3)
      ]),
      'lastname':new FormControl(this.information.lastname,[
        Validators.required,
        Validators.minLength(3)
      ]),
      'salary':new FormControl(this.information.salary,[
        Validators.required
      ]),
      'street1':new FormControl(this.information.street1,[
        Validators.required,
        Validators.minLength(3)
      ]),
      'street2':new FormControl(this.information.street2,[
        Validators.required,
        Validators.minLength(5)
      ]),
      'location':new FormControl(this.information.location,[
        Validators.required
      ]),


    });
  }

    onSubmit():void{
      this.submitted=true;
    }


  
}
