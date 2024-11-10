import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';

@Component({
  selector: 'app-lista-asignaciones',
  templateUrl: './lista-asignaciones.component.html',
  styleUrls: ['./lista-asignaciones.component.css']
})
export class ListaAsignacionesComponent implements OnInit {
  asignaciones: any[] = [];  

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerAsignaciones();  
  }

  obtenerAsignaciones(): void {
    this.administradorService.obtenerAsignaciones().subscribe(
      (data) => {
        this.asignaciones = data;  
        console.log('Asignaciones obtenidas:', this.asignaciones);
      },
      (error) => {
        console.error('Error al obtener asignaciones:', error);
      }
    );
  }
}
