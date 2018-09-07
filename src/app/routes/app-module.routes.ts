import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {JokeComponent} from '../joke/joke.component';
import {NowplayingComponent} from '../nowplaying/nowplaying.component';
import {HomeComponent} from '../home/home.component';
import {ErrorpageComponent} from '../errorpage/errorpage.component';
import { UsersComponent } from "../users/users.component";
import { UserComponent } from "../users/user/user.component";

const appRoutes:Routes=[
    {path:'joke',component:JokeComponent},    
    {path:'home',component:HomeComponent,children:[
        {path:'nowplaying',component:NowplayingComponent}
    ]},
    {path:'users',component:UsersComponent,children:[
        {path:'user/:id/:name',component:UserComponent}
    ]},
    {path:'**',component:ErrorpageComponent}

];


@NgModule({
   imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
   exports:[RouterModule]    
})

export class AppModuleRoutes{

}