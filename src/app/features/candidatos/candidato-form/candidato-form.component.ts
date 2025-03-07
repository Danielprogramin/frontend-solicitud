// src/app/features/candidatos/candidato-form/candidato-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../../../core/services/candidato.service';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {
  candidatoForm: FormGroup;
  candidatoId: number | null = null;
  isEditing = false;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.candidatoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      documento_identidad: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.candidatoId = +id;
      this.isEditing = true;
      this.loadCandidato(this.candidatoId);
    }
  }

  loadCandidato(id: number): void {
    this.loading = true;
    this.candidatoService.getById(id).subscribe({
      next: (candidato) => {
        this.candidatoForm.patchValue(candidato);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar candidato:', err);
        this.loading = false;
        this.router.navigate(['/candidatos']);
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.candidatoForm.invalid) {
      return;
    }

    this.loading = true;

    if (this.isEditing && this.candidatoId) {
      this.candidatoService.update(this.candidatoId, this.candidatoForm.value).subscribe({
        next: () => {
          this.router.navigate(['/candidatos']);
        },
        error: (err) => {
          console.error('Error al actualizar candidato:', err);
          this.loading = false;
        }
      });
    } else {
      this.candidatoService.create(this.candidatoForm.value).subscribe({
        next: () => {
          this.router.navigate(['/candidatos']);
        },
        error: (err) => {
          console.error('Error al crear candidato:', err);
          this.loading = false;
        }
      });
    }
  }
}
