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
    this.user = this.ds.currenUser
    
this.transactionData=this.ds.getTransaction(this.ds.currentAcno)
console.log(this.transactionData);

  }

  ngOnInit(): void {
    
  }

}
