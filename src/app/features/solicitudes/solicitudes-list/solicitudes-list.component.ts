import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../core/services/solicitud.service';
import { TipoEstudioService } from '../../../core/services/tipo-estudio.service';
import { TipoEstudio } from '../../../models/tipo-estudio';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.scss']
})
export class SolicitudesListComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  tiposEstudio: TipoEstudio[] = [];
  loading = true;
  filterForm: FormGroup;

  constructor(
    private solicitudService: SolicitudService,
    private tipoEstudioService: TipoEstudioService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      estado: [''],
      tipo_estudio_id: ['']
    });
  }

  ngOnInit(): void {
    this.loadTiposEstudio();
    this.loadSolicitudes();

    this.filterForm.valueChanges.subscribe(() => {
      this.loadSolicitudes();
    });
  }

  loadTiposEstudio(): void {
    this.tipoEstudioService.getAll().subscribe({
      next: (data) => {
        this.tiposEstudio = data;
      },
      error: (err) => {
        console.error('Error al cargar tipos de estudio:', err);
      }
    });
  }

  loadSolicitudes(): void {
    this.loading = true;
  
    const filters: any = {};
    if (this.filterForm.value.estado) {
      filters.estado = this.filterForm.value.estado;
    }
    if (this.filterForm.value.tipo_estudio_id) {
      filters.tipo_estudio_id = this.filterForm.value.tipo_estudio_id;
    }
  
    this.solicitudService.getAll(filters).subscribe({
      next: (data) => {
        this.solicitudes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar solicitudes:', err);
        this.loading = false;
      }
    });
  }

  deleteSolicitud(id: number): void {
    if (confirm('¿Está seguro de eliminar esta solicitud?')) {
      this.solicitudService.delete(id).subscribe({
        next: () => {
          this.loadSolicitudes();
        },
        error: (err) => {
          console.error('Error al eliminar solicitud:', err);
        }
      });
    }
  }

  updateEstado(id: number): void {
    const nuevoEstado = prompt('Ingrese el nuevo estado (pendiente, en_proceso, completado):');
    if (nuevoEstado) {
      this.solicitudService.changeStatus(id, nuevoEstado).subscribe({
        next: () => {
          this.loadSolicitudes();
        },
        error: (err) => {
          console.error('Error al actualizar estado:', err);
        }
      });
    }
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'pendiente':
        return 'bg-yellow-200 text-yellow-800';
      case 'en_proceso':
        return 'bg-blue-200 text-blue-800';
      case 'completado':
        return 'bg-green-200 text-green-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }
}