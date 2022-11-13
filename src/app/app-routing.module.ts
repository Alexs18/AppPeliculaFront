import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PaneladminComponent } from './pages/paneladmin/paneladmin.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'Peliculas',
    component:PeliculasComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Paneladmin',
    component:PaneladminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**', redirectTo:'' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
