import { Component } from '@angular/core';

@Component({
  selector: 'app-kalmar',
  templateUrl: './kalmar.component.html',
  styleUrls: ['./kalmar.component.css']
})
export class KalmarComponent {

  name: string = "Kalmar FF"
  query: string = "kalmar AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/kalmar-ff.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(255,0,0,1) 20%, rgba(255,255,255,1) 50%, rgba(255,0,0,1) 80%)'
    };
  }
}
