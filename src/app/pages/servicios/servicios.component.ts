import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Service } from './interfaces/servicio.interface';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  private Router = inject(Router);
  services: Service[] = [];
  ngOnInit(): void {
    this.services = [
      {
        name: 'Catering',
        img: [
          {
            src: 'service_background/Catering/image 1.jpeg',
          },
          {
            src: 'service_background/Catering/image 2.jpeg',
          },
          {
            src: 'service_background/Catering/image 3.jpeg',
          },
          {
            src: 'service_background/Catering/image 4.jpeg',
          },
          {
            src: 'service_background/Catering/image 5.jpeg',
          },
          {
            src: 'service_background/Catering/image 6.jpeg',
          },
        ],
      },
      {
        name: 'Planificación',
        img: [],
      },
      {
        name: 'Barra de tragos',
        img: [],
      },
      {
        name: 'Ambientación, sonido e iluminación',
        img: [
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 1.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 2.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 3.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 4.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 5.jpeg',
          },
          {
            src: 'service_background/Ambientación, sonido e iluminación/image 6.jpeg',
          },
        ],
      },
      {
        name: "Dj's",
        img: [
          {
            src: "service_background/Dj's/image 1.jpeg",
          },
        ],
      },
      {
        name: 'Actividades recreativas',
        img: [],
      },
      {
        name: 'Espacio exterior',
        img: [
          {
            src: 'service_background/Espacio exterior/image 1.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 2.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 3.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 4.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 5.jpeg',
          },
          {
            src: 'service_background/Espacio exterior/image 6.jpeg',
          },
        ],
      },
      {
        name: 'Fotografía y video',
        img: [],
      },
      {
        name: 'Show',
        img: [],
      },
      {
        name: 'Tematicas',
        img: [],
      },
    ];
  }

  centerSelection(link: HTMLAnchorElement) {
    link.scrollIntoView({
      block: 'center',
    });
  }

  goToCreateEditService() {
    this.Router.navigate(['crear-servicio'])
  }
}
