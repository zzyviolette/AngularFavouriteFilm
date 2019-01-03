import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { FavorisComponent } from './page/favoris/favoris.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'favoris' , component : FavorisComponent},
  {path : '**' , component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
