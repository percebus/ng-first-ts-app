import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';

const config: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    title: 'Home details',
    component: DetailsComponent,
  },
];

export default config;
