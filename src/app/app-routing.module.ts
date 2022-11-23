import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { Pages } from './models/navigation/pages';

const routes: Routes = [
  {
    path: Pages.Home,
    component: HomeComponent,
    children: []
  },
  {
    path: Pages.About,
    component: AboutComponent,
    children: []
  },
  {
    path: Pages.Contact,
    component: ContactComponent,
    children: []
  },
  {
    path: Pages.Services,
    component: ServicesComponent,
    children: []
  },
  {
    path: Pages.Projects,
    component: ProjectsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
