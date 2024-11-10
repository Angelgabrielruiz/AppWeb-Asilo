import { Component } from '@angular/core';
import { PacienteService } from '../servicios/paciente.service';
import { Paciente } from '../interfaces/paciente';


@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent {
  paciente: Paciente = {
    id : 0,
    nombre: '',
    apellido: '',
    tipo_sangre: '',
    alergias: '',
    tutor: '',
    medicamentos: ''
  };

  constructor(private pacienteService: PacienteService) {}

  agregarPaciente(): void {
    this.pacienteService.agregarPaciente(this.paciente).subscribe(
      response => {
        console.log('Paciente agregado exitosamente:', response);
       
        this.paciente = {id:0, nombre: '', apellido: '', tipo_sangre: '', alergias: '', tutor: '', medicamentos: '' };
      },
      error => {
        console.error('Error al agregar el paciente:', error);
      }
    );
  }
}
