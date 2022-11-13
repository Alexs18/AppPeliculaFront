import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliscardsComponent } from './components/peliscards/peliscards.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaneladminComponent } from './pages/paneladmin/paneladmin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeliculasComponent,
    PeliscardsComponent,
    MainComponent,
    NavbarComponent,
    PaneladminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
