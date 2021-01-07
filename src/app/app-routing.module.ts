import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./home/welcome.component";
import {LoginComponent} from "./login/login.component";
import {PageNotFoundComponent} from "./home/page-not-found.component";
import {ShellComponent} from "./home/shell.component";

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'movies',
        loadChildren: () => import('./movies/movie.module').then(m => m.MovieModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
