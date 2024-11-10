// servicios/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auxiliar: any = null;

  constructor(private http: HttpClient) {}

  isAdminLoggedIn(): boolean {
    
    return localStorage.getItem('adminToken') !== null;
  }

  login(correo: string, contrasena: string) {
    return this.http.post('http://localhost:8080/api/auth/login', { correo, contrasena }).pipe(
      tap((response: any) => {
        if (response.role === 'auxiliar') {
          this.auxiliar = response.auxiliar;
        }
      })
    );
  }

  getAuxiliar() {
    return this.auxiliar; 
  }

  logout() {
    this.auxiliar = null; 
  }
}
