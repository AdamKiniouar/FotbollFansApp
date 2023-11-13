import { Component, OnInit, Input  } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';


@Component({
  selector: 'app-teamnews',
  templateUrl: './teamnews.component.html',
  styleUrls: ['./teamnews.component.css']
})
export class TeamnewsComponent implements OnInit {
  @Input() teamName: any;
  @Input() teamLogo: any;
  @Input() newsQuery: any;
  @Input() backgroundStyle: any;



  constructor(private _services: NewsapiservicesService) {}

  topheadingDisplay: any = [];

  ngOnInit(): void {
    this.topheadingDisplay = []; // Clear the array

    this._services.getNewsByQuery(this.newsQuery).subscribe((result) => {
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
