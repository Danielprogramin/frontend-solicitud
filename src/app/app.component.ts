import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [ RouterOutlet,
    SidebarComponent,
    CommonModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend-solicitud';
  isAuthenticated = false;

  constructor(private authService: AuthService) {} // Inyecta AuthService

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );
  }
}
