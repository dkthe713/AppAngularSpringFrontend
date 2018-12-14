import { GuardarUsuarioService } from './servicios/guardar-usuario.service';
import { Usuario } from './../modelo/usuario.modelo';
import { Component, OnInit } from '@angular/core';
import { OK } from '../modelo/httpstatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-usuario',
  templateUrl: './guardar-usuario.component.html',
  styleUrls: ['./guardar-usuario.component.css'],
  providers: [GuardarUsuarioService]
})
export class GuardarUsuarioComponent implements OnInit {

  private usuario: Usuario;
  private esValido: boolean = true;
  private mensaje: string = "";

  constructor(private guardarUsuarioServicio: GuardarUsuarioService,
    private router: Router) {
    this.usuario = new Usuario;
  }

  ngOnInit() {
  }

  public saveOrUpdateUsuario(): void {
    this.esValido = this.guardarUsuarioServicio.validarCampos(this.usuario);

    if (this.esValido) {
      this.guardarUsuarioServicio.saveOrUpdateUsuario(this.usuario).subscribe(result => {
        if (result.codigoRespuesta == OK) {
          this.router.navigate(['/usuarioComponent']);
        } else {
          this.mensaje = result.mensaje;
        }
      });
    } else {
      this.mensaje = "Debe ingresar los campos obligatorios *";
    }
  }
}
