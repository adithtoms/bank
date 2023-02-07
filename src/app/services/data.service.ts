import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currenUser: any
  currentAcno:any

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0,transaction:[] },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0,transaction:[] },
    1003: { acno: 1003, username: "arun", password: "abc123", balance: 0,transaction:[] },
    1004: { acno: 1004, username: "akil", password: "abc123", balance: 0,transaction:[] },

  }

  register(uname: any, acno: any, psw: any) {
    if (acno in this.userDetails) {
      return false;
    } else {
      this.userDetails[acno] = { acno, username: uname, password: psw, balance: 0 }
      return true;
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        this.currenUser = userDetails[acno]["username"]
        this.currentAcno =acno;
        console.log(this.currenUser);

        return true;
      } else {
        return false
      }
    } else {
      return false
    }
  }

  deposit(acno: any, password: any, amount: any) {
    var userDetails = this.userDetails;
    var amt = parseInt(amount)
    if (acno in userDetails) {
      if (password == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amt;
        // console.log(userDetails[accnum]["balance"]);
        

        userDetails[acno]["transaction"].push({Type:"Credit",Amount:amt,Balance:userDetails[acno]["balance"]})
        
        return userDetails[acno]["balance"];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  withdraw(accnum: any, password: any, amount: any) {
    var userDetails = this.userDetails;
    var amt = parseInt(amount)
    if (accnum in userDetails) {
      if (password == userDetails[accnum]["password"]) {
        if(amt<=userDetails[accnum]["balance"]){
        userDetails[accnum]["balance"] -= amt;

        userDetails[accnum]["transaction"].push({Type:"Debit",Amount:amt,Balance:userDetails[accnum]["balance"]})

        console.log(userDetails);
        

        return userDetails[accnum]["balance"];
        }else{
          alert("insufficient balance")
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    } 
  
  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

}
