import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { AdministradorService } from '../servicios/administrador.service';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.css']
})
export class EliminarPacienteComponent implements OnInit {
  @Input() pacientes: Paciente[] = []; 
  @Output() pacienteEliminado = new EventEmitter<number>();  

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerPacientes();  
  }

  obtenerPacientes(): void {
    this.administradorService.obtenerPacientes().subscribe(
      data => {
        this.pacientes = data; 
        console.log('Pacientes obtenidos:', this.pacientes);
      },
      error => {
        console.error('Error al obtener los pacientes:', error);
      }
    );
  }

  eliminarPaciente(id: number): void {
    this.administradorService.eliminarPaciente(id).subscribe(
      () => {
        console.log('Paciente eliminado exitosamente');
        this.pacienteEliminado.emit(id);  
        this.obtenerPacientes();  
      },
      error => {
        console.error('Error al eliminar el paciente:', error);
      }
    );
  }
}
