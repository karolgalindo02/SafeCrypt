import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Input, Ripple, initTE, } from "tw-elements";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  workTeam = {
    nombreEquipo: '',
    descripcion: '',
    tipo: ''
  };

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('http://localhost:8081/workteam/create', this.workTeam).subscribe(response => {
      console.log(response);
    });
  }
}

initTE({ Input, Ripple });