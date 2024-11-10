
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  isLoginPage: boolean = false;



  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.isLoginPage = this.route.snapshot.routeConfig?.path === 'login';
  }

  goBack() {
    window.history.back();  
  }
  correo: string = '';
  contrasena: string = '';
  error: string = '';



  iniciarSesion(): void {
    this.authService.login(this.correo, this.contrasena).subscribe(
      response => {
        console.log('Respuesta de inicio de sesión:', response); 
        if (response.role === 'auxiliar') {
          this.router.navigate(['/auxiliar']);
        } else if (response.role === 'administrador') {
          this.router.navigate(['/administrador']);
        }
      },
      error => {
        console.error('Error de inicio de sesión:', error);
        this.error = 'Credenciales incorrectas'; 
      }
    );
  }
}
