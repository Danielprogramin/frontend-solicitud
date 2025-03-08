import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';
import { SolicitudFormComponent } from './solicitud-form/solicitud-form.component';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';

@NgModule({
  declarations: [
    SolicitudesListComponent ,
    SolicitudFormComponent , 
    CambiarEstadoComponent    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SolicitudesRoutingModule,
  ]
})
export class SolicitudesModule { }
