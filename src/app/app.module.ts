import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './home/menu.component';
import {WelcomeComponent} from './home/welcome.component';
import {MovieListComponent} from './movies/movie-list.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './home/page-not-found.component';
import {ShellComponent} from './home/shell.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {MovieData} from "./movies/movie-data";
import {MovieDetailComponent} from './movies/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    MovieListComponent,
    LoginComponent,
    PageNotFoundComponent,
    ShellComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 1000, dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
