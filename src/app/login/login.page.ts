import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Para navegar a la página Home
import { Storage } from '@ionic/storage-angular';  // Para manejar la persistencia de datos

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';  // Campo para el usuario
  password: string = '';  // Campo para la contraseña

  constructor(private router: Router, private storage: Storage) {}

  // Método para manejar el inicio de sesión
  async login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      // Autenticación exitosa
      await this.storage.set('isLoggedIn', true);  // Guarda el estado de autenticación en el Storage
      this.router.navigate(['/home']);  // Navega a la página Home
    } else {
      // Si las credenciales no son válidas, muestra un error
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
  }
}