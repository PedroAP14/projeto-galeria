import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Plataforma } from './components/generos/plataforma/plataforma';
import { Rpg } from './components/generos/rpg/rpg';

const routes: Routes = [
  {path: '', component:Home},
  {path: 'generos/plataforma', component:Plataforma},
  {path: 'generos/rpg', component:Rpg}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
