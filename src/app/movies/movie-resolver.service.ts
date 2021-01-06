import { Injectable } from '@angular/core';
import {Movie} from "./Movie";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {MovieService} from "./movie.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    const id = route.paramMap.get('id');
    return this.movieService.getMovie(+id);
  }

}
