import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  Login(user:any):any{
    let {URI_API} = environment;
    return this.http.post(`${URI_API}/login`, user)
  }

  ObtenerRol(id:any):any{
    let {URI_API} = environment;
    return this.http.get(`${URI_API}/permisos/${id}`)
  }

}
