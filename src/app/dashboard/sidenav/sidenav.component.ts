import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Sidenav, initTE } from 'tw-elements';

interface HTMLElementWithSidenav extends HTMLElement {
  toggleSlim: () => void;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService) {}

  Form(){
    this.router.navigate(['form']);
  }
  Crypt(){
    this.router.navigate(['crypt']);
  }
  Login(){
    this.router.navigate(['login']);
  }
  Tables(){
    this.router.navigate(['tables']);
  }

  ngOnInit(): void {
    // Initialize Tailwind Elements
    initTE({ Sidenav });
    // Add event listener for slim toggler
    document
      .getElementById("slim-toggler")
      ?.addEventListener("click", () => {
        const sidenavElement = document.getElementById(
          "sidenav-4"
        ) as HTMLElementWithSidenav;

        if (sidenavElement) {
          const instance = Sidenav.getInstance(sidenavElement);
          instance?.toggleSlim();
        }
      });
  }

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/content']);
    })
    .catch(error => console.log(error));
   }

  navigateToComponent(): void {
    this.router.navigate(['']);
  }
}