import { Component } from '@angular/core';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

}

initTE({ Input, Ripple });