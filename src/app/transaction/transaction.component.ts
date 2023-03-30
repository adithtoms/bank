import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionData:any
 user:any

  constructor(private ds:DataService){
   this.user = JSON.parse(localStorage.getItem("currentUser")||"")
    const acno = JSON.parse(localStorage.getItem("currentAcno")||"")
    
this.ds.getTransaction(acno).subscribe((result:any)=>{
  this.transactionData=result.transaction

})
// console.log(this.transactionData);

  }

  ngOnInit(): void {
    
  }

}
