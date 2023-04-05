import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Service, ServiceData } from './interfaces/servicio.interface';
import { ServiciosState } from './states/servicios.state';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  private Router = inject(Router);
  private serviceStore = inject(ServiciosState);
  services: ServiceData = {
    isEmpty: false,
    data: [],
  };
  serviceSelected = '';
  ngOnInit(): void {
    this.serviceStore.services$.subscribe({
      next: (res) => {
        this.services = res;
        if (!res.isEmpty) {
          if (res.data[0]) {
            this.Router.navigate(['servicios', 'servicio', res.data[0].name]);
            this.serviceSelected = res.data[0].name;
          }
        }
      },
    });
  }

  centerSelection(link: HTMLAnchorElement) {
    link.scrollIntoView({
      block: 'center',
    });
  }

  goToCreateEditService() {
    this.Router.navigate(['crear-servicio']);
  }
}
