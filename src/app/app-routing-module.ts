import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Plataforma } from './components/generos/plataforma/plataforma';
import { Rpg } from './components/generos/rpg/rpg';
import { Terror } from './components/generos/terror/terror';
import { Aventura } from './components/generos/aventura/aventura';

const routes: Routes = [
  {path: '', component:Home},
  {path: 'generos/plataforma', component:Plataforma},
  {path: 'generos/rpg', component:Rpg},
  {path: 'generos/aventura', component:Aventura},
  {path: 'generos/terror', component:Terror}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
