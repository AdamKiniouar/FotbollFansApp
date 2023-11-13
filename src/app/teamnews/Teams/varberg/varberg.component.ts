import { Component } from '@angular/core';

@Component({
  selector: 'app-varberg',
  templateUrl: './varberg.component.html',
  styleUrls: ['./varberg.component.css']
})
export class VarbergComponent {

  name: string = "Varbergs BoIS FC"
  query: string = "varberg bois AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/varbergs-bois.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(0,255,0,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }
}
