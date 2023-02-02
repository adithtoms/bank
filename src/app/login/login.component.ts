import { Component, OnInit } from '@angular/core';
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


  acno = '';
  pass = '';


  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {

  }

  login() {
    var acnum = this.acno
    var psw = this.pass


    const result = this.ds.login(acnum, psw)
    if (result) {
      alert("login success")
      this.router.navigateByUrl("dashboard")
    } else {
      alert("incorrect username or password ")
    }


  }




}
