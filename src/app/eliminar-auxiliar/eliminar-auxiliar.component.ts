import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auxiliares } from '../interfaces/auxiliares';
import { AdministradorService } from '../servicios/administrador.service';

@Component({
  selector: 'app-eliminar-auxiliar',
  templateUrl: './eliminar-auxiliar.component.html',
  styleUrls: ['./eliminar-auxiliar.component.css']
})
export class EliminarAuxiliarComponent implements OnInit {
  auxiliares: Auxiliares[] = []; 
  @Output() auxiliarEliminado = new EventEmitter<number>();  

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerAuxiliares();  
  }

  obtenerAuxiliares(): void {
    this.administradorService.obtenerAuxiliares().subscribe(
      data => {
        this.auxiliares = data;  
        console.log('Auxiliares obtenidos:', this.auxiliares);
      },
      error => {
        console.error('Error al obtener los auxiliares:', error);
      }
    );
  }

  eliminarAuxiliar(id: number): void {
    this.administradorService.eliminarAuxiliar(id).subscribe(
      () => {
        console.log('Auxiliar eliminado exitosamente');
        this.auxiliarEliminado.emit(id);  
        this.obtenerAuxiliares(); 
      },
      error => console.error('Error al eliminar el auxiliar:', error)
    );
  }
}
