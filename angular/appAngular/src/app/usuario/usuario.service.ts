import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario.modelo';
import { Observable } from 'rxjs';
import { RespuestaRest } from '../modelo/respuestaRest.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:8080/getUsuarios");
  }

  public eliminarUsuario(usuario: Usuario): void {
    this.http.post("http://localhost:8080/eliminarUsuario", JSON.stringify(usuario)).subscribe();
    location.reload();
  }
}
