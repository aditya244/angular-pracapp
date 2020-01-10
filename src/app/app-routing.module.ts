import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'parent',
    component: ParentComponent
  },
  // {
  //   path: '',
  //   redirectTo : '/home',
  //   component : HomeComponent,
  //   pathMatch : 'full',
  // },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'about/:id',
    component : AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
