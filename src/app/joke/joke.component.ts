import { Component, OnInit, ViewChild } from '@angular/core';
import { timeout } from 'q';
import {JokelistComponent} from '../joke/jokelist/jokelist.component';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs/Observable';
import { Movies } from '../../movies';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  
 @ViewChild(JokelistComponent) private jkc: JokelistComponent;
  
name :string = 'Shuiab Khan';
age : number=25;
hasLastName:boolean=false;
hide:boolean = false;
quotes=[];
variable:string ='hello';

jokeName:string;
jokeTagLine:string;

jokeList:Array<any>=[];

outJokeList:Array<any>=[];

result:Array<string>;

firstName :string;
lastName:string;
myColor:string="cyan";

//Movies service variables
observableMovie: Observable<Movies[]>;
movieDetails: Observable<Movies>;
movies:Movies[];
movie:object;
errorMessage:string;
singleMovieDetails:Observable<Movies>;



  constructor( private movieService: MoviesService) {

    setTimeout(()=>{
this.hasLastName=true;
    },2000);


    this.quotes = [
      
      {
      setup: "Wh(t did the cheese s(y when it looked in the mirror?", 
        punchline: "Hello-Me (H(lloumi)",
        hide: false
    },
      {
        setup: "A kid threw ( lump of chedd(r (t me", 
        punchline: "I thought ‘Th(tʼs not very m(tureʼ", 
        hide: true
      },
  ]
   }


  ngOnInit() {
    this.getAllNames();

    //MOvies service method
    this.observableMovie= this.movieService.getMoviesWithObservable();
    this.observableMovie.subscribe(
    movies=>this.movies=movies,
     error=>this.errorMessage=<any>error);

  }

  public getMovieDetails(id){
    this.singleMovieDetails= this.movieService.getMovieWithId(id);
    this.singleMovieDetails.subscribe(
      movie=>this.movie=movie,
       error=>this.errorMessage=<any>error);
  
    
  }

  getName=function(event :any){
    console.log(event,"this is event");
    return this.name=(<HTMLInputElement>event.target).value;  

  }

  clickMe = function(){
    return this.hide=true;
  }


  getColor= function(){
    return "#008000";
  }

  addJokes(){
    if(!!this.jokeName&& !!this.jokeTagLine){
      this.jokeList.push({'jokeName':this.jokeName,'jokeTagLine':this.jokeTagLine})
    }
    else{
      alert('Enter all the values');
    }
   
  }

  getAllJokes(res){
    this.outJokeList=res;
  }

  getMyArray(res){
    console.log(res);
    this.result= res;
  }

  getAllNames(){
   this.firstName= this.jkc.getfName();
   this.lastName=this.jkc.getlName();
  }





}
