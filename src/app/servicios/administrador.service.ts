// servicios/administrador.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auxiliares } from '../interfaces/auxiliares';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  eliminarAuxiliar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/auxiliar/${id}`);
  }

  eliminarPaciente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/paciente/${id}`);
  }


  obtenerAuxiliares(): Observable<Auxiliares[]> {
    return this.http.get<Auxiliares[]>(`${this.apiUrl}/auxiliar`);
  }

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/paciente`);
  }

  agregarAuxiliar(auxiliar: Auxiliares): Observable<any> {
    return this.http.post(`${this.apiUrl}/auxiliar`, auxiliar);
  }

  asignarAuxiliar(auxiliarId: number, pacienteId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/asignacion`, { auxiliarId, pacienteId });
  }

  // servicios/administrador.service.ts
obtenerAsignaciones(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/asignacion`);
}

 // Método para actualizar los datos de un paciente
 actualizarPaciente(paciente: Paciente): Observable<Paciente> {
  return this.http.put<Paciente>(`${this.apiUrl}/paciente/${paciente.id}`, paciente);
}

obtenerPacientePorId(id: number): Observable<Paciente> {
  return this.http.get<Paciente>(`${this.apiUrl}/paciente/${id}`);
}

obtenerAuxiliarPorId(id: number): Observable<Auxiliares> {
  return this.http.get<Auxiliares>(`${this.apiUrl}/auxiliar/${id}`);
}

actualizarAuxiliar(auxiliar: Auxiliares): Observable<Auxiliares> {
  return this.http.put<Auxiliares>(`${this.apiUrl}/auxiliar/${auxiliar.id}`, auxiliar);
}

obtenerAuxiliarDetalles(id: number): Observable<Auxiliares> {
  return this.http.get<Auxiliares>(`${this.apiUrl}/auxiliar/${id}`);
}

// Modificar los datos de un auxiliar
modificarAuxiliar(auxiliar: Auxiliares): Observable<Auxiliares> {
  return this.http.put<Auxiliares>(`${this.apiUrl}/auxiliar/${auxiliar.id}`, auxiliar);
}
}
