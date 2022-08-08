import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

const COMPONENTS = [
  LandingComponent
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [COMPONENTS],
})

export class PagesModule { }
