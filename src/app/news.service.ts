import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsPaperService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '51a04b629dae460e9c65bbf9cdde20d6';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    const usUrl = `${this.apiUrl}?sources=bbc-news&apiKey=${this.apiKey}`;
    const trUrl = `${this.apiUrl}?sources=bbc-news&apiKey=${this.apiKey}`;

    return forkJoin({
      us: this.http.get(usUrl),
      tr: this.http.get(trUrl)
    }).pipe(
      map((results: any) => ({
        articles: [...results.us.articles, ...results.tr.articles]
      }))
    );
  }

  getFilteredNews(category: string, country: string = 'us'): Observable<any> {
    const url = `${this.apiUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
