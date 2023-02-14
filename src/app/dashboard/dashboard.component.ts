import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any
  acno:any
  date:any



  constructor(private ds: DataService, private fb: FormBuilder,private route:Router) {
    this.user = this.ds.currenUser
    this.date=new Date()
  }

  depositForm = this.fb.group({
    acnum1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pass1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acnum2: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pass2: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt2: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert('please login')
      this.route.navigateByUrl("")
    }
  }

  deposit() {
    var accnum = this.depositForm.value.acnum1;
    var password = this.depositForm.value.pass1;
    var amount = this.depositForm.value.amnt1;


    const result = this.ds.deposit(accnum, password, amount)
    if (this.depositForm.valid) {
      if (result) {
        alert(`your account is credited with ${amount}  and balance is ${result}`)
      } else {
        alert("Incorrect Accountnumber or password")
      }
    } else {
      alert("invalid form")
    }

  }

  withdraw() {
    var accnum = this.withdrawForm.value.acnum2;
    var password = this.withdrawForm.value.pass2;
    var amount = this.withdrawForm.value.amnt2;


    const result = this.ds.withdraw(accnum, password, amount)
    if (this.withdrawForm.valid) {
      if (result) {
        alert(`your account is debited with ${amount} and balance is ${result}`)

      } else {
        alert("Incorrect Accountnumber or password")

      }
    } else {
      alert("Invalid form")
    }

  }

  logout() {
    alert("click ok to lougout")
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.route.navigateByUrl("")
    
  }

  deleteParent(){
this.acno=JSON.parse(localStorage.getItem("currentAcno")|| "")
  
  }

  cancel(){
    this.acno=''
  }

}
