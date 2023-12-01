import { WorkteamService } from './../../services/workteam.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input, Ripple, initTE, } from "tw-elements";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
    workteam: FormGroup;
  
    constructor(
      private  WorkteamService: WorkteamService,
    ) {
      this.workteam = new FormGroup({
        nombreEquipo: new FormControl(),
        descripcion: new FormControl(),
        tipo: new FormControl()
      });
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

  async onSubmit() {
    console.log(this.workteam.value);
    const response = await this.WorkteamService.addWorkteam(this.workteam.value);
    console.log(response);
  }
  }



initTE({ Input, Ripple });