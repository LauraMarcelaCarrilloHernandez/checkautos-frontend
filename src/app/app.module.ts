import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudVehiculosComponent } from './crud-vehiculos/crud-vehiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { HeaderComponent } from './layout/header/header.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { HistorialComponent } from './historial/historial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SoporteComponent } from './soporte/soporte.component';
import { EditorNombreComponent } from './crud-vehiculos/editor-nombre/editor-nombre.component';



@NgModule({
  declarations: [
    AppComponent, CrudVehiculosComponent, LayoutComponent, SidebarComponent, FooterComponent, ContentComponent, MecanicosComponent, HeaderComponent, SolicitudesComponent, NotificacionesComponent, HistorialComponent, PerfilComponent, SoporteComponent, EditorNombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
