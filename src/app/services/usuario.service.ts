import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestU, Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  loging (user: string, password: string) {
    return this.http.post('http://localhost:3000/usuario/login', { usuario: user, contrasena: password})
  }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<RequestU>('http://localhost:3000/usuario').pipe(map(data => data.users))
  }

  getUsuario (id: number) {
    return this.http.get('http://localhost:3000/usuario/' + id)
  }

  editarUsuario (usuario: Usuario) {
    return this.http.put('http://localhost:3000/usuario/', usuario)
  }

  generarUsuario (usuario: Usuario) {
    return this.http.post('http://localhost:3000/usuario/crear', usuario)
  }
}
