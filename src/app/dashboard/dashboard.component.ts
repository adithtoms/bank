import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any
  acnum1: any
  pass1: any
  amnt1: any
  acnum2: any
  pass2: any
  amnt2: any


  constructor(private ds: DataService) {
    this.user = this.ds.currenUser
  }
  ngOnInit(): void {
  }

  deposit() {
    var accnum = this.acnum1;
    var password = this.pass1;
    var amount = this.amnt1;


    const result = this.ds.deposit(accnum, password, amount)
    if (result) {
      alert(`your account is credited with ${amount}  and balance is ${result}`)
    } else {
      alert("Incorrect Accountnumber or password")
    }

  }

  withdraw() {
    var accnum = this.acnum2;
    var password = this.pass2;
    var amount = this.amnt2;


    const result = this.ds.withdraw(accnum, password, amount)
    if (result) {
      alert(`your account is debited with ${amount} and balance is ${result}`)

    } else {
      alert("Incorrect Accountnumber or password")

    }

  }
}
