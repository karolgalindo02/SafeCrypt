import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styleUrls: ['./crypt.component.css']
})
export class CryptComponent {
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
}
