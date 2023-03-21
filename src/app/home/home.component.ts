import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LazyLoaderDirective } from '../loader/lazy-loader.directive';
import { Loader } from '../loader/loader.interface';

@Component({
  selector: 'app-home',
  template: `
    <button (click)="showAdditionalInfo()">Show Additional Info</button>
    <ng-container
      *ngIf="showInfo"
      [appLazyLoader]="lazyComponentConfig"
    ></ng-container>
  `,
  standalone: true,
  imports: [CommonModule, LazyLoaderDirective],
})
export class HomeComponent {
  showInfo = false;

  // lazyModuleConfig: Loader = {
  //   loader: () => import('../additional-info/additional-info.module'),
  //   module: 'AdditionalInfoModule',
  // };
  lazyComponentConfig: Loader = {
    loader: () => import('./additional-info.component'),
    component: 'AdditionalInfoComponent',
  };

  showAdditionalInfo() {
    this.showInfo = true;
  }
}
