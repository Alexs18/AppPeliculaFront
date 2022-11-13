import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { 

  }
  GetPeliculas(){
    let {URI_API} = environment;
    return this.http.get(`${URI_API}/Peliculas`)
  }
  GetDetallePeliculas(id:any){
    let {URI_API} = environment;
    return this.http.get(`${URI_API}/DetallePeliculas/${id}`)
  }
  DeleteMovies(id:any){
    let {URI_API} = environment;
    return this.http.delete(`${URI_API}/Peliculas/${id}`)
  }
  AgregarPeliculas(pelicula:any):any{
    let {URI_API} = environment;
    return this.http.post(`${URI_API}/Peliculas`, pelicula)
  }

}
