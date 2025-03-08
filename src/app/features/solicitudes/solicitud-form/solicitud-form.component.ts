import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudService } from '../../../core/services/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent implements OnInit {
  solicitudForm!: FormGroup;
  candidatos: any[] = [];
  tiposEstudio: any[] = [];
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.solicitudForm = this.fb.group({
      candidato_id: ['', Validators.required],
      tipo_estudio_id: ['', Validators.required],
      estado: ['pendiente']
    });

    this.cargarCandidatos();
    this.cargarTiposEstudio();
  }

  cargarCandidatos(): void {
    this.solicitudService.getCandidatos().subscribe({
      next: (data) => (this.candidatos = data),
      error: (err) => console.error('Error al cargar candidatos', err)
    });
  }

  cargarTiposEstudio(): void {
    this.solicitudService.getTiposEstudio().subscribe({
      next: (data) => (this.tiposEstudio = data),
      error: (err) => console.error('Error al cargar tipos de estudio', err)
    });
  }

  enviarSolicitud(): void {
    if (this.solicitudForm.invalid) return;

    this.solicitudService.create(this.solicitudForm.value).subscribe({
      next: (res: any) => {
        this.mensaje = 'Solicitud creada con éxito';
        setTimeout(() => this.router.navigate(['/solicitudes']), 2000);
      },
      error: (err: any) => {
        this.mensaje = 'Error al crear solicitud';
        console.error(err);
      }
    });
  }
}
