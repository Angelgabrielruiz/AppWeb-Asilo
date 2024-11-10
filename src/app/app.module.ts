import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
import { AdministradorService } from './servicios/administrador.service';
import { PacienteService } from './servicios/paciente.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuxiliarComponent } from './auxiliar/auxiliar.component';
import { AgregarAuxiliarComponent } from './agregar-auxiliar/agregar-auxiliar.component';
import { ListaAuxiliaresComponent } from './lista-auxiliares/lista-auxiliares.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { AsignarAuxiliarComponent } from './asignar-auxiliar/asignar-auxiliar.component';
import { ListaAsignacionesComponent } from './lista-asignaciones/lista-asignaciones.component';
import { EliminarAuxiliarComponent } from './eliminar-auxiliar/eliminar-auxiliar.component';
import { EliminarPacienteComponent } from './eliminar-paciente/eliminar-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { SeleccionarPacienteComponent } from './seleccionar-paciente/seleccionar-paciente.component';
import { EditarAuxiliarComponent } from './editar-auxiliar/editar-auxiliar.component';
import { SeleccionarAuxiliarComponent } from './seleccionar-auxiliar/seleccionar-auxiliar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    AgregarPacienteComponent,
    LoginComponent,
    AuxiliarComponent,
    AgregarAuxiliarComponent,
    ListaAuxiliaresComponent,
    ListaPacientesComponent,
    AsignarAuxiliarComponent,
    ListaAsignacionesComponent,
    EliminarAuxiliarComponent,
    EliminarPacienteComponent,
    EditarPacienteComponent,
    SeleccionarPacienteComponent,
    EditarAuxiliarComponent,
    SeleccionarAuxiliarComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [AdministradorService, PacienteService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
