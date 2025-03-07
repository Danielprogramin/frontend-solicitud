import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';
import { SolicitudFormComponent } from './solicitud-form/solicitud-form.component';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';

const routes: Routes = [
  { path: '', component: SolicitudesListComponent },
  { path: 'nueva', component: SolicitudFormComponent },
  { path: 'editar/:id', component: SolicitudFormComponent },
  { path: 'cambiar-estado/:id', component: CambiarEstadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
