import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  num1=30;


  constructor() { }

  ngOnInit(): void {
    setInterval ( () => {
      if(this.num1<=0){
        clearInterval;
      }
      else{
        this.num1--;
      }
    },1000);
  }


  otpInputConfig : NgxOtpInputConfig = {
    otpLength : 4,
    autofocus : true,
    classList :{
      inputBox : 'my-super-box-class',
      input : 'my-super-class',
      inputFilled : 'my-super-filled-class',
      inputDisabled : 'my-super-disable-class',
      inputSuccess : 'my-super-success-class',
      inputError : 'my-super-error-class'
    }
  }

  handleotpChange(value:any) : void {
    console.log(value);
  }

  handleFillEvent(value:any) : void {
    console.log(value);
  }

}
function getFormattedTime() {
  throw new Error('Function not implemented.');
}

