import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  links: { path: string, label: string }[] = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/solicitudes', label: 'Solicitudes' },
    { path: '/candidatos', label: 'Candidatos' }
  ];

  constructor(private authService: AuthService, private router: Router) {} // Inyecta AuthService y Router

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']); // Redirige al login después de cerrar sesión
  }
}
