import { Component, OnInit } from '@angular/core';
import { Auxiliares } from '../interfaces/auxiliares';
import { AdministradorService } from '../servicios/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-auxiliar',
  templateUrl: './seleccionar-auxiliar.component.html',
  styleUrls: ['./seleccionar-auxiliar.component.css']
})
export class SeleccionarAuxiliarComponent implements OnInit {
  auxiliares: Auxiliares[] = [];

  constructor(private administradorService: AdministradorService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerAuxiliares();
  }

  obtenerAuxiliares(): void {
    this.administradorService.obtenerAuxiliares().subscribe(
      data => this.auxiliares = data,
      error => console.error('Error al obtener auxiliares:', error)
    );
  }

  seleccionarAuxiliar(auxiliar: Auxiliares): void {
    this.router.navigate(['/editar-auxiliar', auxiliar.id]);
  }
}
