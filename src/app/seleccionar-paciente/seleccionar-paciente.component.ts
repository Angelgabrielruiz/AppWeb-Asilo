
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { AdministradorService } from '../servicios/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-paciente',
  templateUrl: './seleccionar-paciente.component.html',
  styleUrls: ['./seleccionar-paciente.component.css']
})
export class SeleccionarPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  
  constructor(private administradorService: AdministradorService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.administradorService.obtenerPacientes().subscribe(
      data => this.pacientes = data,
      error => console.error('Error al obtener pacientes:', error)
    );
  }

  seleccionarPaciente(paciente: Paciente): void {
    
    this.router.navigate(['/editar-paciente', paciente.id]);
  }
}
