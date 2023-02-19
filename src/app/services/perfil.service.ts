import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfil, RequestP } from '../interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<RequestP>('http://localhost:3000/perfil').pipe(map(data => data.perfiles))
  }

  getPerfil(id: string) {
    return this.http.get('http://localhost:3000/perfil/' + id)
  }

  ediatrPerfil(perfil: Perfil) {
    return this.http.put('http://localhost:3000/perfil/modificar', perfil)
  }

  eliminarPerfil(id: number) {
    return this.http.delete('http://localhost:3000/perfil/' + id)
  }
}
