import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'http://localhost:4000/api/empleado/';

  constructor( private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);

  }

  /* registrarusuario(usuaro: usuario): Observable<any> {
    return this.http.post(this.url, usuaro);

  } */

}
