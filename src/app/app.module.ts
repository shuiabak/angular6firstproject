import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { ListComponent } from './list/list.component';
import { JokelistComponent } from './joke/jokelist/jokelist.component';
import { MealComponent } from './meal/meal.component';
import { BreadtypeComponent } from './meal/breadtype/breadtype.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ColorDirective } from './color.directive';
import { RevisionComponent } from './revision/revision.component';
import { SecondRevisionComponent } from './second-revision/second-revision.component';
import { FirstDirective } from './first.directive';
import { MoviesService} from './movies.service'
import { HttpClientModule  } from '@angular/common/http';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { HomeComponent } from './home/home.component';
import { AppModuleRoutes } from './routes/app-module.routes';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    AppComponent, 
    JokeComponent, ListComponent, JokelistComponent, MealComponent, BreadtypeComponent, ColorDirective, RevisionComponent, SecondRevisionComponent, FirstDirective, NowplayingComponent, HomeComponent, ErrorpageComponent, UsersComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectDropDownModule,
    HttpClientModule,
    AppModuleRoutes
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
