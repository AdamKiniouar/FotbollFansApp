import { Component } from '@angular/core';

@Component({
  selector: 'app-djurgarden',
  templateUrl: './djurgarden.component.html',
  styleUrls: ['./djurgarden.component.css']
})
export class DjurgardenComponent {
  name: string = "Djurgårdens IF"
  query: string = "djurgården AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/djurgardens-if.svg"
  img: any = {};


  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(109,108,255,1) 20%, rgba(6,0,187,1) 50%, rgba(109,108,255,1) 80%)'
    };
  }
}
