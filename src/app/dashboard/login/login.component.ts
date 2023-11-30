import { Component } from '@angular/core';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
}

initTE({ Input, Ripple });