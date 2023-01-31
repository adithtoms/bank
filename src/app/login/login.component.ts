import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your perfect banking partner"
  inputplaceholder="Account Number"


   acno='';
   pass='';


  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1003:{acno:1003,username:"arun",password:"abc123",balance:0},
    1004:{acno:1004,username:"akil",password:"abc123",balance:0},

  }

  constructor(){ }

  ngOnInit(): void {
    
  }

  login(){
    alert('welocome user')
  }

  acnoChange(event:any){
     this.acno=event.target.value;

  }
  passChange(event:any){
    this.pass=event.target.value
    console.log(this.pass);
    
  }

}
