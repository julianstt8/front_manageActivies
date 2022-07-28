import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
];

const COMPONENTS = [
  LandingComponent
];

export class LandingModule { }
