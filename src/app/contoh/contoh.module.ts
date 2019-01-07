import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContohPage } from './contoh.page';
import { AddDotPipe } from '../add-dot.pipe';

const routes: Routes = [
  {
    path: '',
    component: ContohPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContohPage, AddDotPipe]
})
export class ContohPageModule {}
