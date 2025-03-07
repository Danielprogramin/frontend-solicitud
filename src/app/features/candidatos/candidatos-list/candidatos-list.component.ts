// src/app/features/candidatos/candidatos-list/candidatos-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../../models/candidato';
import { CandidatoService } from '../../../core/services/candidato.service';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.scss']
})
export class CandidatosListComponent implements OnInit {
  candidatos: Candidato[] = [];
  loading = true;

  constructor(private candidatoService: CandidatoService) {}

  ngOnInit(): void {
    this.loadCandidatos();
  }

  loadCandidatos(): void {
    this.loading = true;
    this.candidatoService.getAll().subscribe({
      next: (data) => {
        this.candidatos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar candidatos:', err);
        this.loading = false;
      }
    });
  }

  deleteCandidato(id: number): void {
    if (confirm('¿Está seguro de eliminar este candidato?')) {
      this.candidatoService.delete(id).subscribe({
        next: () => {
          this.loadCandidatos();
        },
        error: (err) => {
          console.error('Error al eliminar candidato:', err);
        }
      });
    }
  }
}
