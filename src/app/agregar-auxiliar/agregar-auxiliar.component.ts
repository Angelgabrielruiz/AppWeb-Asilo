import { Component, Output, EventEmitter } from '@angular/core';
import { Auxiliares } from '../interfaces/auxiliares';
import { AdministradorService } from '../servicios/administrador.service';

@Component({
  selector: 'app-agregar-auxiliar',
  templateUrl: './agregar-auxiliar.component.html',
  styleUrls: ['./agregar-auxiliar.component.css']
})
export class AgregarAuxiliarComponent {
  auxiliar: Auxiliares = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };

  @Output() auxiliarAgregado = new EventEmitter<Auxiliares>();

  constructor(private administradorService: AdministradorService) {}

  agregarAuxiliar(): void {
    this.administradorService.agregarAuxiliar(this.auxiliar).subscribe(
      response => {
        console.log('Auxiliar agregado exitosamente:', response);
        this.auxiliarAgregado.emit(this.auxiliar);
        this.auxiliar = { id: 0, nombre: '', apellido: '', correo: '', contrasena: '' }; 
      },
      error => console.error('Error al agregar el auxiliar:', error)
    );
  }
}
