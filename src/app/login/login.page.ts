import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { Storage } from '@ionic/storage-angular';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';  
  password: string = '';  

  constructor(private router: Router, private storage: Storage) {}

<<<<<<< Updated upstream
  // Método para redirigir a la página 'home'
  login() {
    this.router.navigateByUrl('/home');
=======
  async login() {
    if (this.username === 'admin' && this.password === 'admin123') {
  
      await this.storage.set('isLoggedIn', true);  
      this.router.navigate(['/home']);  
    } else {
      
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
>>>>>>> Stashed changes
  }
}