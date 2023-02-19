import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = ""
  contrasena: string = ""

  constructor(private usuarioServ: UsuarioService, private router: Router){
  }

  ngOnInit(): void {
  }

  login(): void {
    this.usuarioServ.loging(this.usuario, this.contrasena).subscribe(data => {
      this.router.navigateByUrl('/usuario')
    }, err => {
      window.alert(err.error.error)
    })
  }

}
