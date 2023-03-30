import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit{

  @Input() item:String|undefined

  //event creation

  @Output()  cancel=new EventEmitter()

  @Output() onDelete= new EventEmitter()

  constructor(){}
  ngOnInit(): void {
    
  }

  onCancel(){
this.cancel.emit()
  }

  deleteAcc(){
    //start event
    this.onDelete.emit(this.item)
  }

}
