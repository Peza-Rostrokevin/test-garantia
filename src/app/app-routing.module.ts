import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarUsuarioComponent } from './usuario/generar-usuario/generar-usuario.component';
import { LoginComponent } from './login/login.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { ModificarUsuarioComponent } from './usuario/modificar-usuario/modificar-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuario/modificar/:id',
    component: ModificarUsuarioComponent
  },
  {
    path: 'usuario/generar',
    component: GenerarUsuarioComponent
  },
  {
    path: 'perfil/modificar/:id',
    component: ModificarPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
