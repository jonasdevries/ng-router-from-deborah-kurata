import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {MovieEditComponent} from "./movie-edit.component";

@Injectable({
  providedIn: 'root'
})
export class MovieEditGuard implements CanDeactivate<MovieEditComponent> {

  canDeactivate(component: MovieEditComponent): boolean {
    if (component.isDirty) {
      const title = component.movie.title || 'New Movie';
      return confirm(`Lose all changes to ${title}?`);
    }
    return true;
  }

}
