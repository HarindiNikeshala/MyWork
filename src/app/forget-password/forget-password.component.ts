import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email: string ='';

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

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
  }

  forgotpassword(){
    this.auth.forgotpassword(this.email);
    this.email='';
  }

}

