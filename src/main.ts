import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    {
      // Environment Injectors (previously we used to have Module Injectors)
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in main ts');
      },
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
