import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  fireauth: any;
  router: any;

  constructor() { }

  forgotpassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/VerifyEmailComponent'])
    },(err: any) => {
      alert('Something went wrong');
    });
  }
}
