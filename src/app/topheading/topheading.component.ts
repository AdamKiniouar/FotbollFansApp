import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  topheadingDisplay: any = [];

  ngOnInit(): void {
    this._services.getNewsByQuery("fotboll AND allsvenskan").subscribe((result) => {
      console.log(result);
      this.topheadingDisplay = result.articles.map((article: any) => {
        article.sourceName = this.transformSourceName(article.source.name);
        return article;
      });
    });
  }

  transformSourceName(sourceName: string): string {
    const domainName = sourceName.replace(/^www\./i, '');
    return domainName;
  }
}
