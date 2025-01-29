import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-error',
  imports: [CommonModule],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  constructor(private http:HttpClient) { }

  get404Error(){
    this.http.get(this.baseUrl + "products/42").subscribe({
      next: response =>  console.log(response),
      error: error  => console.log(error)

  });
  }

  get500Error(){
    this.http.get(this.baseUrl + "buggy/server-error").subscribe({
      next: response => console.log(response),
      error: error  =>   console.log(error)
      
    });
  }


  get400Error(){
    this.http.get(this.baseUrl + "buggy/bad-request").subscribe({
      next: response => console.log(response),
      error: error  => console.log(error)
    });
  }

  get400ValidationError(){
    this.http.get(this.baseUrl + "products/fourtytwo").subscribe({
      next: response => console.log(response),
      error: error=>  {
        console.log(error);
        this.validationErrors = error.errors;
      }
      
    });
  }
}
