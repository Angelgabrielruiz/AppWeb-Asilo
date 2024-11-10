
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/api/paciente';

  constructor(private http: HttpClient) {}

  agregarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post<any>(this.apiUrl, paciente);
  }
}
