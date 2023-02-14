import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = "Your perfect banking partner"
  inputplaceholder = "Account Number"



  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { }


  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }

  login() {
    var acnum = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

if(this.loginForm.valid){
    const result = this.ds.login(acnum, psw)
    if (result) {
      alert("login success")
      this.router.navigateByUrl("dashboard")
    } else {
      alert("incorrect username or password ")
    }
  } else{
    alert("Invalid form")
  }


  }




}
