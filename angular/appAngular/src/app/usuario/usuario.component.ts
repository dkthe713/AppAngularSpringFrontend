import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { Usuario } from '../modelo/usuario.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  private usuarios: Array<Usuario>;

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router
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

  /**
   * Metodo para editar usuarios
   */
  public editarUsuario(usuario: Usuario): void {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['/guardarUsuarioComponent']);
  }

  /**
   * Metodo para eliminar usuarios
   */
  public eliminarUsuario(usuario: Usuario): void {
    if (confirm('¿Está seguro de eliminar el registro?')) {
      this.usuarioServicio.eliminarUsuario(usuario);
    } else {
      console.log('Eliminación cancelada');
    }
  }
}
