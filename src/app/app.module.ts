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
import { MovieEditComponent } from './movies/edit/movie-edit.component';
import { MovieEditInfoComponent } from './movies/edit/movie-edit-info.component';
import {FormsModule} from "@angular/forms";
import { MovieEditTagsComponent } from './movies/edit/movie-edit-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    MovieListComponent,
    LoginComponent,
    PageNotFoundComponent,
    ShellComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieEditInfoComponent,
    MovieEditTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 3000, dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
