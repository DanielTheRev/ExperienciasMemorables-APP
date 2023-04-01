import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../interfaces/servicio.interface';

@Component({
  selector: 'app-servicio-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio-page.component.html',
  styleUrls: ['./servicio-page.component.scss'],
})
export class ServicioPageComponent implements OnInit {
  private ActivatedRoute = inject(ActivatedRoute);
  Service: Service | null = null;
  
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (res) => console.log(res),
    });
  }
}
