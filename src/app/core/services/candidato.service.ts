// src/app/core/services/candidato.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Candidato } from '../../models/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Candidato[]> {
    return this.apiService.get<Candidato[]>('candidatos');
  }

  getById(id: number): Observable<Candidato> {
    return this.apiService.get<Candidato>(`candidatos/${id}`);
  }

  create(candidato: Candidato): Observable<Candidato> {
    return this.apiService.post<Candidato>('candidatos', candidato);
  }

  update(id: number, candidato: Candidato): Observable<Candidato> {
    return this.apiService.put<Candidato>(`candidatos/${id}`, candidato);
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`candidatos/${id}`);
  }
}
