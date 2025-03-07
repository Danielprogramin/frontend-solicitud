import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';

const routes: Routes = [
  { path: '', component: CandidatosListComponent },
  { path: 'nuevo', component: CandidatoFormComponent },
  { path: 'editar/:id', component: CandidatoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
