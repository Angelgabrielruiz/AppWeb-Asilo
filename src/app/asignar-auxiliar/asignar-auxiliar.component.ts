import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Auxiliares } from '../interfaces/auxiliares';
import { Paciente } from '../interfaces/paciente';

@Component({
  selector: 'app-asignar-auxiliar',
  templateUrl: './asignar-auxiliar.component.html',
  styleUrls: ['./asignar-auxiliar.component.css']
})
export class AsignarAuxiliarComponent implements OnInit {
  auxiliares: Auxiliares[] = [];
  pacientes: Paciente[] = [];
  selectedAuxiliarId: number | null = null;
  selectedPacienteId: number | null = null;

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    // Cargar auxiliares y pacientes al inicio
    this.obtenerAuxiliares();
    this.obtenerPacientes();
  }

  obtenerAuxiliares(): void {
    this.administradorService.obtenerAuxiliares().subscribe(
      (data) => {
        this.auxiliares = data;
        console.log('Auxiliares obtenidos:', this.auxiliares);
      },
      (error) => {
        console.error('Error al obtener auxiliares:', error);
      }
    );
  }

  obtenerPacientes(): void {
    this.administradorService.obtenerPacientes().subscribe(
      (data) => {
        this.pacientes = data;
        console.log('Pacientes obtenidos:', this.pacientes);
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }

  asignarAuxiliar(): void {
    if (this.selectedAuxiliarId && this.selectedPacienteId) {
      this.administradorService.asignarAuxiliar(this.selectedAuxiliarId, this.selectedPacienteId).subscribe(
        (response) => {
          console.log('Auxiliar asignado exitosamente:', response);
        },
        (error) => {
          console.error('Error al asignar el auxiliar:', error);
        }
      );
    } else {
      console.log('Debe seleccionar un auxiliar y un paciente');
    }
  }
}
