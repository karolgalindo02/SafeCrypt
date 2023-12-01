import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent implements OnInit {
  encriptacion: FormGroup;

  constructor(
    private  DataService: DataService,
  ) {
    this.encriptacion = new FormGroup({
      textoplano: new FormControl(),
      textocifrado: new FormControl()
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  informacionEncriptarValue = '';
  resultadoEncriptacionValue = '';


  clearTextArea() {
    this.informacionEncriptarValue = '';
    this.resultadoEncriptacionValue = '';
  }

  // Method to encrypt the text
  encryptText() {
    const ciphertext = CryptoJS.AES.encrypt(this.informacionEncriptarValue, 'secret key 123').toString();
    this.resultadoEncriptacionValue = ciphertext;
  }

  // Method to decrypt the text
  decryptText() {
    const bytes  = CryptoJS.AES.decrypt(this.informacionEncriptarValue, 'secret key 123');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    this.resultadoEncriptacionValue = originalText;
  }

  switchText() {
    this.informacionEncriptarValue = this.resultadoEncriptacionValue;
  }

  async onSubmit() {
    console.log(this.encriptacion.value);
    const response = await this.DataService.addData(this.encriptacion.value);
    console.log(response);
  }
}
