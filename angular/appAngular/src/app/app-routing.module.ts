import { GuardarUsuarioComponent } from './guardar-usuario/guardar-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/usuarioComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent },
    { path: 'usuarioComponent', component: UsuarioComponent },
    { path: 'guardarUsuarioComponent', component: GuardarUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
