import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  //path: a string that matches the URL in the browser address bar.
  { path: 'heroes', component: HeroesComponent },
  //component: the component that the router should create when navigating to this route.
  { path: 'dashboard', component: DashboardComponent },
  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],
  //AppRoutingModule exports RouterModule so it will be available throughout the app.
  exports: [RouterModule]
})
export class AppRoutingModule { }