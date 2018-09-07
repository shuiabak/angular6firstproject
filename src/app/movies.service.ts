import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../movies';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url : string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }


  getMoviesWithObservable():Observable<Movies[]>{

    return this.http.get(this.url)
          .map(this.extractData)
          .catch(this.handleErrorsWithObservable);
  }

  private extractData(res:Response |any){
    let body= res.results;
    console.log(body);
    return body;
  }

  private extractSingleData(res1:Response |any){
    let body1= res1;
    console.log(body1);
    return body1;
  }

  private handleErrorsWithObservable(error:Response |any){
    console.error(error.message || error);
    return Observable.throw( error.message || error);
  }

  getMovieWithId(id):Observable<Movies>{   
    console.log(id); 
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=35e16679c616a21b9ddebb66272c5902')
          .map(this.extractSingleData)
          .catch(this.handleErrorsWithObservable);
  }
}
