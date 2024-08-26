import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { NewsPaperService } from '../news.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  articles: any[] = [];  // Verileri tutmak için bir değişken
  results: any[] = [];   // Diğer veriler için bir değişken
  constructor(private newsService: NewsPaperService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe((data) => {
      this.articles = data.articles;  // Veriyi articles değişkenine atıyoruz
      this.results = data.articles;   // Veriyi results değişkenine atıyoruz
    });
  }
}
