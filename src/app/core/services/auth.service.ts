// src/app/core/services/auth.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core'; // <-- Añade estas importaciones
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

interface AuthResponse {
  token: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isAuthenticatedSubject.next(!!this.getToken());
  }

  login(credentials: { email: string, password: string }): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('login', credentials).pipe(
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) { 
      return localStorage.getItem('token');
    }
    return null;
  }
}
