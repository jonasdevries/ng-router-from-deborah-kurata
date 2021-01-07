import { Component, OnInit } from '@angular/core';
import {Movie} from "../Movie";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  pageTitle = 'Movie Edit';
  errorMessage = '';

  private currentMovie: Movie;
  private originalMovie: Movie;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const dataName = 'movie';
      this.onMovieRetrieved(data[dataName]);
    })
  }

  onMovieRetrieved(movie: Movie): void {
    this.movie = movie;

    // Adjust the title
    if (this.movie.id === 0) {
      this.pageTitle = 'Add Movie';
    } else {
      this.pageTitle = `Edit Movie: ${this.movie.title}`;
    }
  }

  get isDirty(): boolean {
    return JSON.stringify(this.originalMovie) !== JSON.stringify(this.currentMovie);
  }

  get movie(): Movie {
    return this.currentMovie;
  }
  set movie(value: Movie) {
    this.currentMovie = value;
    // Clone the object to retain a copy
    this.originalMovie = Object.assign({}, value);
  }

  isValid(path?: string) {
    return false;
  }

  saveMovie() {

  }

  deleteMovie() {

  }
}
