import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from '../servicios/administrador.service';
import { Auxiliares } from '../interfaces/auxiliares';

@Component({
  selector: 'app-editar-auxiliar',
  templateUrl: './editar-auxiliar.component.html',
  styleUrls: ['./editar-auxiliar.component.css']
})
export class EditarAuxiliarComponent implements OnInit {
  auxiliar: Auxiliares | null = null;

  constructor(
    private route: ActivatedRoute,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerAuxiliar(id);
    }
  }

  obtenerAuxiliar(id: string): void {
    this.administradorService.obtenerAuxiliarPorId(+id).subscribe(
      (auxiliar) => {
        this.auxiliar = auxiliar;
      },
      (error) => {
        console.error('Error al obtener el auxiliar:', error);
      }
    );
  }

  actualizarAuxiliar(): void {
    if (this.auxiliar) {
      this.administradorService.actualizarAuxiliar(this.auxiliar).subscribe(
        (actualizado) => {
          console.log('Auxiliar actualizado:', actualizado);
        },
        (error) => {
          console.error('Error al actualizar el auxiliar:', error);
        }
      );
    }
  }
}
