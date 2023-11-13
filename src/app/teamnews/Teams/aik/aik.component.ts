import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aik',
  templateUrl: './aik.component.html',
  styleUrls: ['./aik.component.css']
})
export class AikComponent {



  name: string = "AIK"
  query: string = "aik AND allsvenskan";
  logo: string = "https://fotbollsresultat.com/wp-content/plugins/sportnyhet-data/images/soccer/sweden/1407/aik.svg"
  img: any = {};


  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(241,255,0,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }

}
