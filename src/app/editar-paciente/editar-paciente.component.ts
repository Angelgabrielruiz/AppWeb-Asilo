import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from '../servicios/administrador.service';
import { Paciente } from '../interfaces/paciente';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {
  paciente: Paciente | null = null;

  constructor(
    private route: ActivatedRoute,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerPaciente(id);
    }
  }

  obtenerPaciente(id: string): void {
    this.administradorService.obtenerPacientePorId(+id).subscribe(
      (paciente) => {
        this.paciente = paciente;
      },
      (error) => {
        console.error('Error al obtener el paciente:', error);
      }
    );
  }

  actualizarPaciente(): void {
    if (this.paciente) {
      this.administradorService.actualizarPaciente(this.paciente).subscribe(
        (actualizado) => {
          console.log('Paciente actualizado:', actualizado);
        },
        (error) => {
          console.error('Error al actualizar el paciente:', error);
        }
      );
    }
  }
}
