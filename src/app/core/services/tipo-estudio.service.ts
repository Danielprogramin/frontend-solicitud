// src/app/core/services/tipo-estudio.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TipoEstudio } from '../../models/tipo-estudio';

@Injectable({
  providedIn: 'root'
})
export class TipoEstudioService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<TipoEstudio[]> {
    return this.apiService.get<TipoEstudio[]>('tipo-estudios');
  }

  getById(id: number): Observable<TipoEstudio> {
    return this.apiService.get<TipoEstudio>(`tipo-estudios/${id}`);
  }
}
