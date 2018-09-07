import { Component, OnInit ,Input, EventEmitter,Output, ViewChild} from '@angular/core';
import { RevisionComponent } from '../revision/revision.component';

@Component({
  selector: 'app-second-revision',
  templateUrl: './second-revision.component.html',
  styleUrls: ['./second-revision.component.css']
})
export class SecondRevisionComponent implements OnInit {
  @Input() Person:object;
  @Output() newPerson = new EventEmitter();
  @ViewChild(RevisionComponent) private revs : RevisionComponent;

  verticle:string=''; 


  constructor() { }

  ngOnInit() {
    this.getPerson();
  }
  ngAfterViewInit(){
   
  }


  getPerson(){
    this.Person["age"]=23;
    this.newPerson.emit(this.Person); 
    // this.verticle = this.revs.person.verticle;
  
    
  }

}
