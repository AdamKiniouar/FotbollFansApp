import { Component } from '@angular/core';

@Component({
  selector: 'app-sirius',
  templateUrl: './sirius.component.html',
  styleUrls: ['./sirius.component.css']
})
export class SiriusComponent {

  name: string = "IK Sirius"
  query: string = "sirius AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/ik-sirius.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(45,49,249,1) 20%, rgba(0,0,0,1) 50%, rgba(45,49,249,1) 80%)'
    };
  }
}
