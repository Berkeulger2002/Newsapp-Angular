import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsPaperService } from '../../news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visibleArticles: any[] = [];
  currentIndex: number = 0;
  articlesPerSlide: number = 1; // Now showing only one article at a time
  articles: any[] = [];
  results: any[] = [];

  constructor(private newsService: NewsPaperService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe((data) => {
      this.articles = data.articles;
      this.results = data.articles;
      this.updateVisibleArticles(); // Update visible articles after fetching data
    });

    // Automatically move to the next slide every 3 seconds
    setInterval(() => this.nextSlide(), 3000);
  }

  updateVisibleArticles(): void {
    this.visibleArticles = this.articles.slice(this.currentIndex, this.currentIndex + this.articlesPerSlide);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.articlesPerSlide;
    } else {
      this.currentIndex = Math.max(this.articles.length - this.articlesPerSlide, 0);
    }
    this.updateVisibleArticles();
  }

  nextSlide(): void {
    if (this.currentIndex < this.articles.length - this.articlesPerSlide) {
      this.currentIndex += this.articlesPerSlide;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleArticles();
  }
}
