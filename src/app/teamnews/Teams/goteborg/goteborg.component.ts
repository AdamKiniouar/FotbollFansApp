import { Component } from '@angular/core';

@Component({
  selector: 'app-goteborg',
  templateUrl: './goteborg.component.html',
  styleUrls: ['./goteborg.component.css']
})
export class GoteborgComponent {
  name: string = "IFK Göteborg"
  query: string = "blåvitt AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/ifk-goteborg.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(36,37,252,1) 25%, rgba(227,227,255,1) 50%, rgba(53,39,255,1) 75%)'
    };
  }
}
