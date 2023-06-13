import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;
  
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, this.customEmailValidator]),
    password: new FormControl('', [Validators.required])
  })
  getError(control: any): string {
    if (control.errors?.required && control.touched)
    return 'This Field is Required';
    else if(control.errors?.emailError && control.touched)
    return 'Please enter valid email';
    else return '';
  }

  customEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true
      }
    else return null;

  }

  constructor( private formBuilder : FormBuilder) { 
    this.reactiveForm=this.formBuilder.group({
      username: new FormControl
    })
  }


  ngOnInit(): void {
  }

}
