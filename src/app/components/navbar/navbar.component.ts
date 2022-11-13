import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }
  nombreuser:any
  rol:any
  id:any
  ngOnInit(): void {
    this.nombreuser = localStorage.getItem('nombre');
    this.id = localStorage.getItem('id');
    this.permisos(this.id);
  }

  logout(){
    console.log('borrar todas las cookies');
    localStorage.clear();
    this.router.navigate(['']);
  }
  permisos(id:any){
    this.auth.ObtenerRol(id).subscribe((resp:any)=>{
      console.log('resp');
      console.log(resp);
      
      let {rol} = resp;
        this.rol = rol
    })
  }

}
