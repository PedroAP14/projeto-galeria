import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { Plataforma } from './components/generos/plataforma/plataforma';
import { Rpg } from './components/generos/rpg/rpg';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Plataforma,
    Rpg
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
