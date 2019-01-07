import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contoh', loadChildren: './contoh/contoh.module#ContohPageModule' },
  { path: 'form-daftar', loadChildren: './form-daftar/form-daftar.module#FormDaftarPageModule' },
  { path: 'detail-daftar', loadChildren: './detail-daftar/detail-daftar.module#DetailDaftarPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
