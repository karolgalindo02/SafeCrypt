import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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
}
