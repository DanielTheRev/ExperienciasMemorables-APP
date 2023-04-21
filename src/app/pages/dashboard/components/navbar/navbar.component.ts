import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navs = [
    {
      link: 'Imagenes-fondo',
      activeClass: 'active',
      name: 'Fondo de imagenes'
    },
    {
      link: 'nosotros',
      activeClass: 'active',
      name: 'Nosotros'
    },
    {
      link: 'servicios',
      activeClass: 'active',
      name: 'Servicios'
    },
    {
      link: 'contacto',
      activeClass: 'active',
      name: 'Contacto'
    },
  ]
}
