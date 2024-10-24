import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private storage: Storage) {}

  async salir() {
    // Borra los datos del usuario almacenados
    await this.storage.remove('isLoggedIn');
    // Redirige al login
    this.router.navigate(['/login']);
  }

  async ngOnInit() {
    await this.storage.create();
  }

  openMenu() {
    // Lógica para abrir el menú
  }
}
