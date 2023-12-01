import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  constructor(
    private UserService: UserService,
    private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.UserService.login(this.formLogin.value)
      .then(resp => {
        console.log(resp);
        this.router.navigate(['/crypt']);
      })
      .catch(error => console.log(error));
  }

  onClickGoogle() {
    this.UserService.loginWithGoogle()
    .then(() => {
      console.log('Login con Google');
      this.router.navigate(['/crypt']);
    })
    .catch(error => console.log(error));
  }

  onClickGithub() {
    this.UserService.loginWithGithub()
    .then(() => {
      console.log('Login con Github');
      this.router.navigate(['/crypt']);
    })
    .catch(error => console.log(error));
  }
}

