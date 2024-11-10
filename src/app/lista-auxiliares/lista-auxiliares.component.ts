import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Auxiliares } from '../interfaces/auxiliares';

@Component({
  selector: 'app-lista-auxiliares',
  templateUrl: './lista-auxiliares.component.html',
  styleUrls: ['./lista-auxiliares.component.css']
})
export class ListaAuxiliaresComponent implements OnInit {
  auxiliares: Auxiliares[] = [];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerAuxiliares();
  }

  obtenerAuxiliares(): void {
    this.administradorService.obtenerAuxiliares().subscribe(
      data => {
        this.auxiliares = data;
      },
      error => console.error('Error al obtener auxiliares:', error)
    );
  }
}
