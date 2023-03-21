import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
  //lazy-load multiple routes
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.homeRoutes),
  },
];
