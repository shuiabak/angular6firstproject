import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  mealType:Array<string>=['6','FootLong'];
  selectedMealType:string;
  selectedBreadType:string;
  
  constructor() { }

  ngOnInit() {
  }

  getBreadType(res){
    console.log(res);
    this.selectedBreadType=res;
  }



}
