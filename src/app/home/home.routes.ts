import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Routes } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //lazy-load route providers/services
    providers: [
      LoaderService,
      {
        // Environment Injectors
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => {
          console.log('ENVIRONMENT_INITIALIZER in home-routes');
        },
        multi: true,
      },
    ],
  },
];
