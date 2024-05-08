import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { JsonPipe } from '@angular/common';
import { IFormStructure } from './services/form.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-forms';

  data?: string;

  formStructure : IFormStructure[] = [];

  initialData: object = {};

  urlApi = 'http://localhost:5000';

  http = inject(HttpClient)

  constructor() {
    this.http.get<IFormStructure[]>(`assets/form1.json`).subscribe(res => this.formStructure = res);
    this.http.get<any>(`assets/data1.json`).subscribe(res => this.initialData = res);
  }

  process(event: any) {
    this.data = event;
    console.log("DATA=", event);
  }

}
