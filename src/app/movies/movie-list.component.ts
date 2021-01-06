import { Component, OnInit } from '@angular/core';
import {Movie} from "./Movie";
import {MovieService} from "./movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  pageTitle = 'Movie List';
  filteredMovies: Movie[];
  movies: Movie[];
  errorMessage: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;// this.performSearch(movies);
          // this.filteredMovies = this.performFilter(this.listFilter);
        },
        (error: any) => this.errorMessage = error
      );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get showImage(): boolean {
    return true; //this.movieParameterService.displayPosters;
  }
  set showImage(value: boolean) {
    //this.movieParameterService.displayPosters = value;
  }

}
