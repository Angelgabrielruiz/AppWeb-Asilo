import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuxiliarComponent } from './auxiliar/auxiliar.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'auxiliar', component: AuxiliarComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'agregar-paciente', component: AgregarPacienteComponent },
  { path: 'agregar-auxiliar', component: AgregarAuxiliarComponent },
  { path: 'lista-auxiliares', component: ListaAuxiliaresComponent },
  { path: 'lista-pacientes', component: ListaPacientesComponent },
  { path: 'asignar-auxiliar', component: AsignarAuxiliarComponent },
  { path: 'lista-asignaciones', component: ListaAsignacionesComponent },
  { path: 'eliminar-auxiliar', component: EliminarAuxiliarComponent },
  { path: 'eliminar-paciente', component: EliminarPacienteComponent },
  { path: 'seleccionar-paciente', component: SeleccionarPacienteComponent },
  { path: 'editar-paciente/:id', component: EditarPacienteComponent },
  { path: 'seleccionar-paciente', component: SeleccionarPacienteComponent }, 
  { path: 'editar-paciente/:id', component: EditarPacienteComponent },
  { path: 'seleccionar-auxiliar', component: SeleccionarAuxiliarComponent }, 
  { path: 'editar-auxiliar/:id', component: EditarAuxiliarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
