import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss']
})
export class ModificarPerfilComponent implements OnInit {
  id!: string;
  nombre!: string;
  descripcion!: string

  constructor(private activatedR: ActivatedRoute, private perfilServ: PerfilService, private router: Router){}

  ngOnInit(): void {
    this.id = this.activatedR.snapshot.paramMap.get('id') || '0'
      this.perfilServ.getPerfil(this.id).subscribe((data: any) => {
        this.nombre = data.result.nombre
        this.descripcion = data.result.descripcion
    })
  }

  guardar(): void {
    this.perfilServ.ediatrPerfil({id: +this.id, nombre: this.nombre, descripcion: this.descripcion }).subscribe(data => {
      window.alert('¡Perfil modificado con éxito!')
      this.router.navigateByUrl('/usuario')
    })
  }

}
