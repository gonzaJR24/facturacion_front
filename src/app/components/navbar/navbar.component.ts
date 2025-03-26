import { Component } from '@angular/core';
import { UploadProduccionComponent } from "../upload-produccion/upload-produccion.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [UploadProduccionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private routes:Router){}
  redirectUpload(){
    this.routes.navigate(["/upload"])
  }
}
