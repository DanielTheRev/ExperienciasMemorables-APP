import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-edit-servicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-edit-servicio.component.html',
  styleUrls: ['./create-edit-servicio.component.scss'],
})
export class CreateEditServicioComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
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

    console.log({
      name: this.name,
      icon: this.iconFile,
      imgs: this.imgFiles,
    });
  }
}
