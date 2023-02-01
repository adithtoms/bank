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


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {

  }

  login() {
    var acnum = this.acno
    var psw = this.pass
    var userDetails = this.ds.userDetails

    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert("login success")
        this.router.navigateByUrl('dashboard')
      } else {
        alert("incorrect password")
      }
    } else {
      alert("acnym incorrect")
    }

    //alert('welocome user')
  }

  
 

}
