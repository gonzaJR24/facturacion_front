import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UploadProduccionComponent } from "./components/upload-produccion/upload-produccion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, UploadProduccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facturacion';
}
