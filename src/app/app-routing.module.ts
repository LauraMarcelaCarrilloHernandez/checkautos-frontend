import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';
import { HistorialComponent } from './historial/historial.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SoporteComponent } from './soporte/soporte.component';

const routes: Routes = [
  {path:'', component: SolicitudesComponent},
  {path:'solicitudes', component: SolicitudesComponent},
  {path:'vehiculos', component: CrudVehiculosComponent},
  {path:'mecanicos', component: MecanicosComponent},
  {path:'notificaciones', component: NotificacionesComponent},
  {path:'historial', component: HistorialComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'soporte', component: SoporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
