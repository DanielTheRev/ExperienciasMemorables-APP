import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {
  Service,
  ServiceDTO,
  ServiceData,
} from '../interfaces/servicio.interface';
import { ServiciosService } from '../services/servicios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiciosState {
  private readonly _servicesSource = new BehaviorSubject<ServiceData>({
    isEmpty: false,
    data: [],
  });
  private Router = inject(Router);

  readonly services$ = this._servicesSource.asObservable();
  private ServiciosService = inject(ServiciosService);
  constructor() {
    //* trayendo todos los servios
    this.ServiciosService.getServices().subscribe({
      next: (res) => this.setServices(res),
    });
  }

  private getServiceValue() {
    return this._servicesSource.getValue();
  }

  private setServices(services: ServiceData) {
    this._servicesSource.next(services);
    return;
  }

  addService(service: ServiceDTO) {
    // return this.ServiciosService.addService(service).subscribe({
    //   next: (res) => {
    //     if (res.success) {
    //       const services = [res.data, ...this.getServiceValue().data];
    //       const data: ServiceData = {
    //         isEmpty: services.length <= 0,
    //         data: services,
    //       };
    //       this.setServices(data);
    //       this.Router.navigate(['services', res.data.name]);
    //     }
    //   },
    // });
    return this.ServiciosService.addService(service).pipe(
      map((res) => {
        console.log(res);
        if (res.success) {
          const services = [res.data, ...this.getServiceValue().data];
          const data: ServiceData = {
            isEmpty: services.length <= 0,
            data: services,
          };
          this.setServices(data);
        }
        return res.success;
      })
    );
  }

  removeService(_id: string) {
    this.ServiciosService.deleteService(_id).subscribe({
      next: (res) => {
        if (res.success) {
          const services = this.getServiceValue().data.filter(
            (e) => e.id !== _id
          );
          const data: ServiceData = {
            isEmpty: services.length <= 0,
            data: services,
          };
          this.setServices(data);
        }
      },
    });
  }
}
