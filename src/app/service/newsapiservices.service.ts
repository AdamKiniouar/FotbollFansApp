import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {


  private apiKey = 'f4d3b879333e4424a1b9511a62c36b0f'; // Replace with your own API key

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/everything?q=Allsvenskan&domains=expressen.se,aftonbladet.se&from=2023-05-26&sortBy=publishedAt&apiKey=f4d3b879333e4424a1b9511a62c36b0f"

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  getNewsByQuery(query: string): Observable<any> {

    this.getNewsByQuerys('IFK Göteborg').subscribe((articles: any[]) => {
      if (articles.length > 0) {
        const firstArticleUrl = articles[0].link;
        console.log(firstArticleUrl);
      } else {
        console.log('No articles found.');
      }
    });

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const fromDateString = formatDate(oneMonthAgo);

    const domains = ['aftonbladet.se', 'svenskafans.com', 'fotbollskanalen.se', 'expressen.se'];
    const domainQuery = domains.join(',');

    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=${fromDateString}&sortBy=publishedAt&language=sv&domains=${domainQuery}&excludeDomains=feber.se&apiKey=${this.apiKey}`;
    return this._http.get(apiUrl).pipe(
      map((response: any) => {
        const articles = response.articles.filter((article: any) => article.author !== null);
        response.articles = articles;
        return response;
      })
    );
  }

  getNewsByQuerys(query: string): Observable<any> {
    const googleNewsUrl = `https://news.google.com/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US%3Aen`;

    return this._http.get(googleNewsUrl, { responseType: 'text' }).pipe(
      map((response: any) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(response, 'text/xml');
        const items = xml.querySelectorAll('item');
        const articles: { title: any; link: any; description: any; pubDate: any; }[] = [];

        items.forEach((item: any) => {
          const titleElement = item.querySelector('title');
          const linkElement = item.querySelector('link');
          const descriptionElement = item.querySelector('description');
          const pubDateElement = item.querySelector('pubDate');

          const title = titleElement ? titleElement.textContent : '';
          const link = linkElement ? linkElement.textContent : '';
          const description = descriptionElement ? descriptionElement.textContent : '';
          const pubDate = pubDateElement ? pubDateElement.textContent : '';

          articles.push({ title, link, description, pubDate });
        });

        return articles;
      })
    );
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = padZeroes(date.getMonth() + 1);
  const day = padZeroes(date.getDate());
  return `${year}-${month}-${day}`;
}

function padZeroes(num: number): string {
  return num.toString().padStart(2, '0');
}
