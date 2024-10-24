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

  async login() {
    // Aquí deberías realizar la autenticación real con un backend
    if (this.username === 'admin' && this.password === 'admin') {
      // Guarda el estado de la sesión
      await this.storage.set('isLoggedIn', true);
      // Redirige al home
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error, etc.
    }
  }

  async ngOnInit() {
    await this.storage.create();
  }
}
