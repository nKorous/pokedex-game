import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameSelectComponent } from './game-select/game-select.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '/'},
  { path: 'gameSelect', component: GameSelectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
