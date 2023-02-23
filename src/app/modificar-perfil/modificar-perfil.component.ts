import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Perfil } from '../interfaces/perfil.interface';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss']
})
export class ModificarPerfilComponent implements OnInit {
  id!: string;
  form: FormGroup;

  constructor(private activatedR: ActivatedRoute, private perfilServ: PerfilService, private router: Router, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      id: '',
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
  })
  }

  ngOnInit(): void {
    this.id = this.activatedR.snapshot.paramMap.get('id') || '0'
    this.perfilServ.getPerfil(this.id).subscribe((data: any) => {
      this.form.setValue({
        id: this.id,
        nombre: data.result.nombre,
        descripcion: data.result.descripcion
    })
  })

  }

  guardar(): void {
    const data: Perfil = this.form.value
    this.perfilServ.ediatrPerfil(data).subscribe(data => {
      window.alert('¡Perfil modificado con éxito!')
      this.router.navigateByUrl('/usuario')
    })
  }

}
