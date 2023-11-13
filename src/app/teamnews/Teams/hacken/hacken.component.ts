import { Component } from '@angular/core';

@Component({
  selector: 'app-hacken',
  templateUrl: './hacken.component.html',
  styleUrls: ['./hacken.component.css']
})
export class HackenComponent {
  name: string = "BK Häcken"
  query: string = "häcken AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/bk-hacken.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(241,255,0,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }
}
