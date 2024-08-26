import { Component } from '@angular/core';
import { Router, ActivatedRoute,RouterModule  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarActive = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}
