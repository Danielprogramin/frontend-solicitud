import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';

@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CandidatosRoutingModule
  ]
})
export class CandidatosModule { }
