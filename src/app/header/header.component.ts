import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }

  navigateToAboutMe(): void {
    this.router.navigate(['/aboutme']);
  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
}
