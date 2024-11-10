import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita } from '../interfaces/visita';
import { Paciente } from '../interfaces/paciente'; // Asegúrate de importar el modelo actualizado

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private apiUrl = 'http://localhost:8080/api/visita'; // URL base de la API

  constructor(private http: HttpClient) {}

  registrarVisita(visita: Visita): Observable<Visita> {
    return this.http.post<Visita>(`${this.apiUrl}`, visita);
  }

  obtenerVisitasPorPaciente(idPaciente: number): Observable<Visita[]> {
    return this.http.get<Visita[]>(`${this.apiUrl}/paciente/${idPaciente}`);
  }

  // Obtener el paciente por ID
  obtenerPacientePorId(idPaciente: number): Observable<Paciente> {
    return this.http.get<Paciente>(`http://localhost:8080/api/paciente/${idPaciente}`);
  }
}
