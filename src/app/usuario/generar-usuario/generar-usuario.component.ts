import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/interfaces/perfil.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { PerfilService } from '../../services/perfil.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-generar-usuario',
  templateUrl: './generar-usuario.component.html',
  styleUrls: ['./generar-usuario.component.scss']
})
export class GenerarUsuarioComponent implements OnInit {
  user: Usuario = {
  username: "",
  password: "",
  telefono: 0,
  correo: "",
  perfil_id: 0
  }
  perfiles$!: Observable<Perfil[]>


  constructor(private usuarioServ: UsuarioService, private router:Router, private perfilServ: PerfilService){}

  ngOnInit(): void {
    this.getPerfiles()
  }

  getPerfiles(): void {
    this.perfiles$ = this.perfilServ.getPerfiles()
  }

  guardar(): void {
    this.usuarioServ.generarUsuario(this.user).subscribe(data => {
      window.alert('¡Usuario generado con éxito!')
      this.router.navigateByUrl('/usuario')
    })
  }

}
