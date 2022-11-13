import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.scss']
})
export class PaneladminComponent implements OnInit {

  constructor(
    private servicemovies:PeliculasService
  ) { }
  Peliculas:any
  genero:any
  titulo:any
  descripcion:any
  ngOnInit(): void {
    this.ObtenerPeliculas()
  }

  ObtenerPeliculas(){
    console.log('pasa por peliculas');
    this.servicemovies.GetPeliculas().subscribe(resp=>{
      this.Peliculas = resp     
    })
  }
  boorarpelicula(id:any){
    this.servicemovies.DeleteMovies(id).subscribe((resp:any)=>{
      let respuesta = resp
      alert(respuesta.message);
      this.ObtenerPeliculas()
    });
  }
  AgregarPelicula(){
    let pelicula = {
      titulo:this.titulo,
      descripcion:this.descripcion,
      genero:this.genero
    }
    this.servicemovies.AgregarPeliculas(pelicula).subscribe((resp:any)=>{
        alert(resp.message);
        this.ObtenerPeliculas()
    })
  }

}
