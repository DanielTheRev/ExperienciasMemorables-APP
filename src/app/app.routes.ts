import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ImagesFondoComponent } from './pages/images-fondo/images-fondo.component';
import { ServicioPageComponent } from './pages/servicios/subpages/servicio-page/servicio-page.component';
import { CreateEditServicioComponent } from './pages/servicios/subpages/create-edit-servicio/create-edit-servicio.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Experiencias Memorables App',
    children: [
      {
        path: 'Imagenes-fondo',
        component: ImagesFondoComponent,
        title: 'Editar imagenes de fondo',
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        title: 'Editar Nosotros',
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
        title: 'Editar Servicios',
        children: [
          {
            path: 'servicio/:id',
            component: ServicioPageComponent,
            pathMatch: 'full',
          },
          {
            path: '**',
            redirectTo: '/servicios',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'crear-servicio',
        component: CreateEditServicioComponent,
        title: 'Crear nuevo servicio',
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'Imagenes-fondo',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
