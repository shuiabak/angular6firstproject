import { Component, OnInit,Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {
  size:string='30px';
  fontFamily:string='Comic Sans MS';
  username:string='shuiabak';
  name:string; 
  color:string='blue';

  person:object={
    name:'Shuiab'
  }
  
  constructor() { }

  ngOnInit() {    

  } 

  public getInput(event):void{
    console.log(event);
  }

 public  getUpdatedPerson(res):void{   
   console.log(res,"updated data");
   this.person['verticle']="manufacturing";
 }

}
