import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Paciente } from '../interfaces/paciente';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.administradorService.obtenerPacientes().subscribe(
      data => {
        this.pacientes = data;
      },
      error => console.error('Error al obtener pacientes:', error)
    );
  }
}
