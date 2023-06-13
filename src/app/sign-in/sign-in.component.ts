import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
// import { SocialAuthService } from "@abacritt/angularx-social-login";
// import { FacebookLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // user : SocialUser | undefined;

  // Email!: String;
  // password!: String;
  // reenterpassword!: String;
  data: any;
  // formData!: FormGroup;

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

  getpasswordError(control: any): string {
    if (control.errors?.required && control.touched)
    return 'This Field is Required';
    else return '';
  }
  PasswordValidator(control: AbstractControl) {
    if (control.touched)
      return {
        passwordError: true
      }
    else return null;
  }

  constructor(private router: Router) { //, private AuthService: SocialAuthService
  }

  // signInWithFB(): void {
  //   this.AuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.AuthService.signOut();
  // }



  // get email(){return this.LoginForm.get('email')}

  ngOnInit(): void {
    // this.AuthService['authState'].subscribe(this.user);{
    //   this.user=this.user;
    // }
  }

  // Google() : any{
  //   this.AuthService['SignIn'](GoogleLoginProvider.PROVIDER_ID)
  // }

  submit() {
    this.data = this.LoginForm.value;
    console.log(this.data);
    this.router.navigate(['/success']);
  }

}
