import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-produccion',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './upload-produccion.component.html',
  standalone:true,
  styleUrl: './upload-produccion.component.css'
})
export class UploadProduccionComponent {
  loading:boolean=false;
  imgUrl:string='https://github.com/gonzaJR24/HTML-CSS/blob/main/menu/Logo-fondomorado.png?raw=true';
  selected!:File;

  constructor(private http:HttpClient){}

  onSelectedFile(event:any){
    const file:File=event.target.files[0];
    this.selected=file;
  }

  uploadFile(event:Event){
    event.preventDefault()
    if(this.selected){
      const formData=new FormData;
      formData.append("file", this.selected)
      let url: string = "http://localhost:8080/api/upload";
      this.http.post(url, formData, {

        observe: 'response'})
        .subscribe({
          next: response => {
            console.log(response);
            this.loading = false;
            alert('File uploaded successfully.');
          },
          error: err => {
            console.error('Error occurred: ', err);
            this.loading = false;
            alert('Error uploading file.');
          }
        });
    }
    }
  }

