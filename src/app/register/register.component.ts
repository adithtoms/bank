import { Component , OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}

  //create reactive form of register form

  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {

  }

  register(){
    var accnum= this.registerForm.value.acno
    var password=this.registerForm.value.psw
    var user =this.registerForm.value.uname

    // console.log(accnum,password,user);

    if(this.registerForm.valid){

    const result=this.ds.register(accnum,user,password);

    if(result){
      alert("user details registered")
      this.router.navigateByUrl('')
    } else{
      alert("user already exists")
    }
    
  } else{
    alert("invalid form")
  }


  }
}
