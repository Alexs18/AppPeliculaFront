import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliscards',
  templateUrl: './peliscards.component.html',
  styleUrls: ['./peliscards.component.scss']
})
export class PeliscardsComponent implements OnInit {

  constructor(
    private servicemovies:PeliculasService
    ) {
    
  }
  Peliculas:any
  DetaPeliculas:any

  ngOnInit(): void {
    this.ObtenerPeliculas();
  }

  ObtenerPeliculas(){
    console.log('pasa por peliculas');
    this.servicemovies.GetPeliculas().subscribe(resp=>{
      // let [data] = resp
      this.Peliculas = resp
      this.Peliculas.data;
      console.log(this.Peliculas.data);      
    })
  }

  MoviestoCategory(id:any){
    console.log('mostrando por id');
    console.log(id);
    this.servicemovies.GetDetallePeliculas(id).subscribe(resp=>{
      console.log(resp);
      
      this.DetaPeliculas = resp
    })
  }
}
