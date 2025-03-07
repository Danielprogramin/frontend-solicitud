// src/app/features/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../core/services/solicitud.service';

interface EstadosCount {
  pendiente: number;
  en_proceso: number;
  completado: number;
  total: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  estadosCount: EstadosCount = {
    pendiente: 0,
    en_proceso: 0,
    completado: 0,
    total: 0
  };
  loading = true;

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.solicitudService.getAll().subscribe({
      next: (solicitudes) => {
        this.estadosCount = {
          pendiente: solicitudes.filter(s => s.estado === 'pendiente').length,
          en_proceso: solicitudes.filter(s => s.estado === 'en_proceso').length,
          completado: solicitudes.filter(s => s.estado === 'completado').length,
          total: solicitudes.length
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
