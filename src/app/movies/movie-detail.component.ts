import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movie.service";
import {Movie} from "./Movie";
import {ActivatedRoute, Router,  ParamMap} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  public movie$: Observable<Movie>;
  errorMessage: any;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // take movie from resolver -> package this in an observable because the resolver subscribes automaticaly and passes an object
    // i like to use an movie$ on the component because of the async pipe
    this.movie$ = of(this.route.snapshot.data['movie']);

    /* without resolver
    this.movie$ = this.route.params.pipe(
      switchMap(params => {
        return this.movieService.getMovie(Number(params['id']));
      })
    );*/

  }

  onBack(): void {
    this.router.navigate(['/movies'])
  }

}
