import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./home/welcome.component";
import {MovieListComponent} from "./movies/movie-list.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./home/page-not-found.component";
import {ShellComponent} from "./home/shell.component";
import {MovieDetailComponent} from "./movies/movie-detail.component";
import {MovieResolver} from "./movies/movie-resolver.service";
import {MovieEditComponent} from "./movies/edit/movie-edit.component";
import {MovieEditGuard} from "./movies/edit/movie-edit.guard";
import {MovieEditInfoComponent} from "./movies/edit/movie-edit-info.component";

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome',
        component: WelcomeComponent
      },
      { path: 'movies',
        component: MovieListComponent
      },
      { path: 'movies/:id',
        component: MovieDetailComponent,
        resolve: { movie: MovieResolver }
      },
      {
        path: 'movies/:id/edit',
        component: MovieEditComponent,
        resolve: { movie: MovieResolver },
        canDeactivate: [MovieEditGuard],
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: MovieEditInfoComponent }
          //{ path: 'tags', component: MovieEditTagsComponent }
        ]
      },
      {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  // imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
