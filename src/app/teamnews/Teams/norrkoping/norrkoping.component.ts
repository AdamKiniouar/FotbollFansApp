import { Component } from '@angular/core';

@Component({
  selector: 'app-norrkoping',
  templateUrl: './norrkoping.component.html',
  styleUrls: ['./norrkoping.component.css']
})
export class NorrkopingComponent {

  name: string = "IFK Norrköping"
  query: string = "norrköping AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/ifk-norrkoping.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(36,37,252,1) 25%, rgba(227,227,255,1) 50%, rgba(53,39,255,1) 75%)'
    };
  }
}
