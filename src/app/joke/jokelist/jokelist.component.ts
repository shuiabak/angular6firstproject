import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {
@Input() newJokeList:Array<object>;
@Output() listJokes=new EventEmitter();

@Output() myArray=new EventEmitter();
nameList=['Ahmed','Khan'];

fName:string;
lName:string;

  constructor() { }

  ngOnInit() {
   this.getJokeList(); 
   this.getArray();
  }

  getArray(){    
    this.myArray.emit(this.nameList);
  } 

  getJokeList(){
        this.listJokes.emit(this.newJokeList);
  }

  getfName(){
    return this.fName= this.nameList[0];
  }

  getlName(){
   return this.lName= this.nameList[1];
  }

}
