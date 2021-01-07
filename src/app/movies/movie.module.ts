import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListComponent} from "./movie-list.component";
import {RouterModule, Routes} from "@angular/router";
import {MovieDetailComponent} from "./movie-detail.component";
import {MovieEditInfoComponent} from "./edit/movie-edit-info.component";
import {MovieResolver} from "./movie-resolver.service";
import {MovieEditComponent} from "./edit/movie-edit.component";
import {MovieEditGuard} from "./edit/movie-edit.guard";

const movieRoutes: Routes = [
  { path: '', component: MovieListComponent},
  {
    path: ':id',
    component: MovieDetailComponent,
    resolve: { movie: MovieResolver }
  },
  {
    path: ':id/edit',
    component: MovieEditComponent,
    resolve: { movie: MovieResolver },
    canDeactivate: [MovieEditGuard],
      children: [
        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'info', component: MovieEditInfoComponent }
        //{ path: 'tags', component: MovieEditTagsComponent }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ]
})
export class MovieModule { }
