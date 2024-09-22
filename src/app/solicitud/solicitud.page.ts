import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage {
  codigo: string = '';
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false; 

  constructor() {}

  onSubmit() {
    if (this.nuevaContrasena === this.confirmarContrasena) {
      console.log('Cambio de contraseña exitoso');
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword; 
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword; 
  }
}