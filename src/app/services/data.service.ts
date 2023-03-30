import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading headers as global
const option={
  headers:new HttpHeaders()

}

@Injectable({
  providedIn: 'root'
})



export class DataService {

  currenUser: any
  currentAcno:any
  userDetails: any

  constructor(private http:HttpClient) {
    // this.getData()
   }

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

// getData(){
//   if(localStorage.getItem('database')){
//     this.userDetails=JSON.parse(localStorage.getItem('database') || "")
//   }
//   if(localStorage.getItem('currentUser')){
//     this.currenUser=localStorage.getItem('currentUser')
//   }
//   if(localStorage.getItem('currentAcno')){
//     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||"")
//   }
// }


getToken(){
  //access token
  const token=JSON.parse(localStorage.getItem("token")||"")

  //generate  header
  let headers=new HttpHeaders()

  if(token){
    //append token in header
   option.headers= headers.append("access_token",token)
  }

  return option

}




  register(acno: any,uname: any,  psw: any) {
  
    
    const  data={acno,uname,psw}
   return this.http.post('http://localhost:3000/register',data)
  }

  login(acno: any, psw: any) {
    const data={acno,psw}
    return this.http.post("http://localhost:3000/login",data)
    
  }


  deposit(acno: any, password: any, amount: any) {
    const data={acno,password,amount}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
    // var userDetails = this.userDetails;
    // var amt = parseInt(amount)
    // if (acno in userDetails) {
    //   if (password == userDetails[acno]["password"]) {
    //     userDetails[acno]["balance"] += amt;
    //     // console.log(userDetails[accnum]["balance"]);
        

    //     userDetails[acno]["transaction"].push({Type:"Credit",Amount:amt,Balance:userDetails[acno]["balance"]})

    //     this.saveData()
        
    //     return userDetails[acno]["balance"];
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
  }
  withdraw(accnum: any, password: any, amount: any) {
   const data={acno:accnum,password,amount}
   return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
    // var userDetails = this.userDetails;
    // var amt = parseInt(amount)
    // if (accnum in userDetails) {
    //   if (password == userDetails[accnum]["password"]) {
    //     if(amt<=userDetails[accnum]["balance"]){
    //     userDetails[accnum]["balance"] -= amt;

    //     userDetails[accnum]["transaction"].push({Type:"Debit",Amount:amt,Balance:userDetails[accnum]["balance"]})

    //     console.log(userDetails);

    //     this.saveData()
        

    //     return userDetails[accnum]["balance"];
    //     }else{
    //       alert("insufficient balance")
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // } 
  
  }

  getTransaction(acno:any){
    const data={acno}
    return this.http.post('http://localhost:3000/getTransaction',data,this.getToken())
  }

  deleacc(acno:any){
    return this.http.delete(`http://localhost:3000/delete/`+acno,this.getToken())
  }

}
