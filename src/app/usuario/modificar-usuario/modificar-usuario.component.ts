import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit{
  id: string =""
  user: Usuario = {
    id: 0,
    username: "",
    password: "",
    telefono: 0,
    correo: ""
    }

  constructor(private activatedR: ActivatedRoute, private usuarioServ: UsuarioService, private router:Router){}

  ngOnInit(): void {
    this.id = this.activatedR.snapshot.paramMap.get('id') || ''
    this.user.id = +this.id
    this.usuarioServ.getUsuario(this.user.id).subscribe((data: any) => {
      this.user.username = data.result.username
      this.user.password = data.result.password
      this.user.telefono = data.result.telefono
      this.user.correo = data.result.correo
    } )
  }

  guardar(): void {
    this.usuarioServ.editarUsuario(this.user).subscribe(data => {
      window.alert('¡Usuario modificado con éxito!')
      this.router.navigateByUrl('/usuario')
    })
  }

}
