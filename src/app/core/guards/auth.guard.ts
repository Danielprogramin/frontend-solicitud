// src/app/core/guards/auth.guard.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean | UrlTree {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.authService.getToken()) {
        return this.router.createUrlTree(['/auth/login']);
      }
      return true;
    }
    return true; // Permite acceso temporal en SSR
  }
}
