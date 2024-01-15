import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'submit', component: DisplayComponent }
  
];
