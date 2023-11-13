import { Component } from '@angular/core';

@Component({
  selector: 'app-elfsborg',
  templateUrl: './elfsborg.component.html',
  styleUrls: ['./elfsborg.component.css']
})
export class ElfsborgComponent {
  name: string = "IF Elfsborg"
  query: string = "elfsborg AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/if-elfsborg.svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(241,255,0,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }
}
