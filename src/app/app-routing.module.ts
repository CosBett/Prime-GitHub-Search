import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'user', component: GithubSearchComponent },
  { path: 'repos', component: ReposComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
