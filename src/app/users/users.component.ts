import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<object>=[
    {
      id:1,
name:'Shuiab'
    },
{
id:2,
name:'Rajeev'
},
{
  id:3,
  name:'Tayyab'
  }
  ]
       
  
  constructor() { }

  ngOnInit() {
  }

}
