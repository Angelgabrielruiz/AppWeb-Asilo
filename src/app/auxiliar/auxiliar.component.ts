import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitaService } from '../servicios/visita.service';
import { AuthService } from '../servicios/auth.service';
import { Visita } from '../interfaces/visita';
import { Paciente } from '../interfaces/paciente'; 

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {
  visita: Visita = {
    id_auxiliar: 0,
    id_paciente: 0,
    fecha: '',
    descripcion: ''
  };
  paciente: Paciente | null = null; 
  

  constructor(
    private authService: AuthService,
    private visitaService: VisitaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const auxiliar = this.authService.getAuxiliar(); 
    if (auxiliar) {
      this.visita.id_auxiliar = auxiliar.id;
      this.visita.id_paciente = auxiliar.paciente_id;

    
      this.visitaService.obtenerPacientePorId(this.visita.id_paciente).subscribe(
        (pacienteData: Paciente) => {
          this.paciente = pacienteData; 
        },
        error => {
          console.error('Error al obtener el paciente:', error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  registrarVisita(): void {
    this.visitaService.registrarVisita(this.visita).subscribe(
      response => {
        console.log('Visita registrada exitosamente:', response);
        this.visita = { id_auxiliar: this.visita.id_auxiliar, id_paciente: this.visita.id_paciente, fecha: '', descripcion: '' }; 
      },
      error => {
        console.error('Error al registrar la visita:', error);
      }
    );
  }
}
