import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Solicitud } from '../../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  constructor(private apiService: ApiService) {}

  getAll(filters: any = {}): Observable<Solicitud[]> {
    return this.apiService.get<Solicitud[]>('solicitudes', filters);
  }

  getById(id: number): Observable<Solicitud> {
    return this.apiService.get<Solicitud>(`solicitudes/${id}`);
  }

  create(solicitud: Solicitud): Observable<Solicitud> {
    return this.apiService.post<Solicitud>('solicitudes', solicitud);
  }

  update(id: number, solicitud: Solicitud): Observable<Solicitud> {
    return this.apiService.put<Solicitud>(`solicitudes/${id}`, solicitud);
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`solicitudes/${id}`);
  }

  changeStatus(id: number, estado: string): Observable<Solicitud> {
    return this.apiService.put<Solicitud>(`solicitudes/${id}/estado`, { estado });
  }

  /**
   * Obtiene la lista de candidatos disponibles
   */
  getCandidatos(): Observable<any[]> {
    return this.apiService.get<any[]>('candidatos');
  }

  /**
   * Obtiene la lista de tipos de estudio disponibles
   */
  getTiposEstudio(): Observable<any[]> {
    return this.apiService.get<any[]>('tipo-estudios');
  }
}
