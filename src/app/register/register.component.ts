import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno = '';
  psw = '';
  uname = '';

  constructor(private ds:DataService,private router:Router){ }

  ngOnInit(): void {

  }

  register(){
    var accnum= this.acno
    var password=this.psw
    var user =this.uname

    // console.log(accnum,password,user);

    const result=this.ds.register(user,accnum,password);

    if(result){
      alert("user details registered")
      this.router.navigateByUrl('')
    } else{
      alert("user already exists")
    }
    
  }



}
