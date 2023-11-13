import { Component } from '@angular/core';

@Component({
  selector: 'app-hammarby',
  templateUrl: './hammarby.component.html',
  styleUrls: ['./hammarby.component.css']
})
export class HammarbyComponent {

  name: string = "Hammarby IF"
  query: string = "hammarby AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/hammarby-if.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,171,8,1) 20%, rgba(255,255,255,1) 50%, rgba(0,171,8,1) 80%)'
    };
  }
}
