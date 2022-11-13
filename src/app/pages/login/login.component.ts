import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private serviceauth: AuthService, private router:Router ) {
  }

  password:any
  email:any

  ngOnInit(): void {
    
  }

  Login():void{
    let user={
      password:this.password,
      email:this.email
    }
    this.serviceauth.Login(user).subscribe((resp:any)=>{
      console.log(resp)
      let {token, nombre, id} = resp
      if (!token) {
        console.log('usuario no');
        
        return alert('usuario no autorizado')
      }
      console.log('true');
      
      localStorage.setItem('token', token);
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('id', id);
      this.router.navigate(['/Peliculas']);
    })
  }

}
