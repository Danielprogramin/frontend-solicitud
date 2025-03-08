import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudService } from '../../../core/services/solicitud.service';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.css']
})
export class CambiarEstadoComponent {
  solicitudId!: number;
  estadoActualizado = new EventEmitter<void>();
  estadoForm: FormGroup;

  constructor(private fb: FormBuilder, private solicitudService: SolicitudService) {
    this.estadoForm = this.fb.group({
      estado: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.estadoForm.invalid) return;

    const nuevoEstado = this.estadoForm.value.estado;

    this.solicitudService.changeStatus(this.solicitudId, nuevoEstado).subscribe({
      next: () => {
        alert('Estado actualizado con éxito');
        this.estadoActualizado.emit();
      },
      error: (err) => {
        console.error('Error al actualizar estado:', err);
      }
    });
  }
}
