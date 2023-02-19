import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../interfaces/usuario.interface';
import { PerfilService } from '../services/perfil.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'correo', 'telefono', 'acciones'];
  usuarios$!: Observable<Usuario[]>;


  constructor(private usuarioServ: UsuarioService, private router: Router, private perfilServ: PerfilService) {
   }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.usuarios$ = this.usuarioServ.getUsuarios()
  }

  eliminarP(id:number): void {
    this.perfilServ.eliminarPerfil(id).subscribe(data => {
      window.alert('¡Perfil eliminado con éxito!')
    })
  }

}
