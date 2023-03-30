import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ImagesFondoComponent } from './pages/images-fondo/images-fondo.component';

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
