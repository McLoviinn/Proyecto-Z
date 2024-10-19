import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Para navegar a la página Home
import { Storage } from '@ionic/storage-angular';  // Para manejar la persistencia de datos

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';  
  password: string = '';  

  constructor(private router: Router, private storage: Storage) {}

  // Método para manejar el inicio de sesión
  async login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      // Autenticación exitosa
      await this.storage.set('isLoggedIn', true); 
      this.router.navigate(['/home']);  
    } else {
      // Si las credenciales no son válidas, muestra un error (puedes agregar un mensaje)
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
  }
}
