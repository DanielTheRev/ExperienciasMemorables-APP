import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceDTO } from '../../interfaces/servicio.interface';
import { ServiciosState } from '../../states/servicios.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-servicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-edit-servicio.component.html',
  styleUrls: ['./create-edit-servicio.component.scss'],
})
export class CreateEditServicioComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private serviceStore = inject(ServiciosState);
  private Router = inject(Router);
  loading = false;
  name: string = '';
  iconFile: File | null = null;
  localIconFile: { src: SafeUrl } | null = null;

  imgFiles: File[] = [];
  localImgFiles: { src: SafeUrl; id: string }[] = [];

  ngOnInit(): void {}

  loadImg(event: any) {
    if (event.target.name === 'icon') {
      console.log('quiere subir un icono');
      this.iconFile = event.target.files[0];
      const blobURL = window.URL.createObjectURL(this.iconFile!);
      this.localIconFile = {
        src: this.sanitizer.bypassSecurityTrustUrl(blobURL),
      };
      return;
    }
    for (const f of event.target.files) {
      this.imgFiles.unshift(f);
      const blobURL = window.URL.createObjectURL(f);
      this.localImgFiles.unshift({
        src: this.sanitizer.bypassSecurityTrustUrl(blobURL),
        id: f.name,
      });
    }
    event.target.value = '';
  }

  saveService() {
    if (!this.name) {
      console.log('necesita un nombre');
      return;
    }
    if (!this.iconFile) {
      console.log('necesita un icono');
      return;
    }
    const serviceDTO: ServiceDTO = {
      name: this.name,
      icon: this.iconFile,
      images: this.imgFiles,
    };
    this.loading = true;
    this.serviceStore.addService(serviceDTO).subscribe({
      next: (res) => {
        if (res) {
          this.loading = false;
          this.Router.navigate(['servicios', 'servicio', this.name], {
            queryParams: {
              id: 'asdasd',
            },
          });
          return;
        }
      },
    });
    // this.Router.navigate(['services'])
  }
}
