import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) {}

  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
