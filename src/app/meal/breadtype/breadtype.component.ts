import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadtype',
  templateUrl: './breadtype.component.html',
  styleUrls: ['./breadtype.component.css']
})
export class BreadtypeComponent implements OnInit {


 breadTypeList:Array<string>=['Wheat','Rice','Maida'];
 breadType:string;  
  @Output() selectedBreadType=new EventEmitter();

  constructor() { }

  ngOnInit() {    
  }
  setBreadType(){
    this.selectedBreadType.emit(this.breadType);
  }

  



}
