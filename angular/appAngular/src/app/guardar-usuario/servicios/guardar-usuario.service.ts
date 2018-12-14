import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RespuestaRest } from 'src/app/modelo/respuestaRest.modelo';
import { Usuario } from './../../modelo/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class GuardarUsuarioService {

  constructor(private http: HttpClient) { }

  public validarCampos(usuario: Usuario): boolean {
    let esValido = true;
    if (!usuario.primerNombre) {
      esValido = false;
    }
    if (!usuario.primerApellido) {
      esValido = false;
    }
    if (!usuario.direccion) {
      esValido = false;
    }
    return esValido;
  }
  public saveOrUpdateUsuario(usuario: Usuario): Observable<RespuestaRest> {
    return this.http.post<RespuestaRest>("http://localhost:8080/saveOrUpdate", JSON.stringify(usuario));
  }
}
