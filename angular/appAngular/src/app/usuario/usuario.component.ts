import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { Usuario } from '../modelo/usuario.modelo';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  private usuarios: Array<Usuario>;

  constructor(
    private usuarioServicio: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  private cargarUsuarios(): void {
    console.log('Servicio de consulta de usuarios');
    this.usuarioServicio.getUsuarios().subscribe(result => {
      console.log(result);
      this.usuarios = result;
      console.log(this.usuarios);
    });
  }
}
