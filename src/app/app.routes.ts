import { Routes } from '@angular/router';
import { UploadProduccionComponent } from './components/upload-produccion/upload-produccion.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"upload", component:UploadProduccionComponent},
    {path:"home", component:HomeComponent},
];
