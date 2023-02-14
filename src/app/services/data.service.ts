import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currenUser: any
  currentAcno:any
  userDetails: any

  constructor() {this.getData() }

  // userDetails: any = {
  //   1000: { acno: 1000, username: "anu", password: "abc123", balance: 0,transaction:[] },
  //   1001: { acno: 1001, username: "amal", password: "abc123", balance: 0,transaction:[] },
  //   1003: { acno: 1003, username: "arun", password: "abc123", balance: 0,transaction:[] },
  //   1004: { acno: 1004, username: "akil", password: "abc123", balance: 0,transaction:[] },

  // }

saveData(){
  if(this.userDetails){
    localStorage.setItem("database",JSON.stringify(this.userDetails))
  }
  if(this.currenUser){
    localStorage.setItem("currentUser",this.currenUser)
  }
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
}

getData(){
  if(localStorage.getItem('database')){
    this.userDetails=JSON.parse(localStorage.getItem('database') || "")
  }
  if(localStorage.getItem('currentUser')){
    this.currenUser=localStorage.getItem('currentUser')
  }
  if(localStorage.getItem('currentAcno')){
    this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||"")
  }
}




  register(acno: any,uname: any,  psw: any) {
    if (acno in this.userDetails) {
      return false;
    } else {
      this.userDetails[acno] = { acno, username: uname, password: psw, balance: 0,transaction:[] }
      console.log(this.userDetails[acno]);

      this.saveData()
      
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

        this.saveData()

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

        this.saveData()
        
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

        this.saveData()
        

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
