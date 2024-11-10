import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Auxiliares } from '../interfaces/auxiliares';
import { Paciente } from '../interfaces/paciente';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  auxiliares: Auxiliares[] = [];
  pacientes: Paciente[] = [];
  asignaciones: any[] = [];
  selectedAuxiliarId: number | null = null;
  selectedPacienteId: number | null = null;

  
  pacienteSeleccionado: Paciente | null = null;

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerAuxiliares();
    this.obtenerPacientes();
    this.obtenerAsignaciones();
  }

  obtenerAsignaciones(): void {
    this.administradorService.obtenerAsignaciones().subscribe(
      data => {
        console.log("Asignaciones obtenidas:", data);
        this.asignaciones = data;
      },
      error => console.error('Error al obtener asignaciones:', error)
    );
  }

  obtenerAuxiliares(): void {
    this.administradorService.obtenerAuxiliares().subscribe(
      data => {
        console.log("Auxiliares obtenidos:", data);
        this.auxiliares = data;
      },
      error => console.error('Error al obtener auxiliares:', error)
    );
  }

  obtenerPacientes(): void {
    this.administradorService.obtenerPacientes().subscribe(
      data => {
        console.log("Pacientes obtenidos:", data);
        this.pacientes = data;
      },
      error => console.error('Error al obtener pacientes:', error)
    );
  }

  seleccionarPaciente(paciente: Paciente): void {
    this.pacienteSeleccionado = paciente;
  }

  onPacienteActualizado(paciente: Paciente): void {
    console.log('Paciente actualizado:', paciente);
    this.pacienteSeleccionado = null; 
    this.obtenerPacientes(); 
  }

  eliminarAuxiliar(id: number): void {
    this.administradorService.eliminarAuxiliar(id).subscribe(
      () => {
        console.log('Auxiliar eliminado exitosamente');
        this.auxiliares = this.auxiliares.filter(aux => aux.id !== id);
      },
      error => console.error('Error al eliminar el auxiliar:', error)
    );
  }

  eliminarPaciente(id: number): void {
    this.administradorService.eliminarPaciente(id).subscribe(
      () => {
        console.log('Paciente eliminado exitosamente');
        this.pacientes = this.pacientes.filter(pac => pac.id !== id);
      },
      error => console.error('Error al eliminar el paciente:', error)
    );
  }

  
}
