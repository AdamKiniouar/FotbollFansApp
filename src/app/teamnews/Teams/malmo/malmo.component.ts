import { Component } from '@angular/core';

@Component({
  selector: 'app-malmo',
  templateUrl: './malmo.component.html',
  styleUrls: ['./malmo.component.css']
})
export class MalmoComponent {

  name: string = "Malmö FF"
  query: string = "malmö AND allsvenskan";
  logo: string = "https://content.sportslogos.net/logos/136/4303/thumbs/clexne95r9bkfsrxhg307ogf5.gif"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(163,216,255,1) 25%, rgba(255,255,255,1) 50%, rgba(163,216,255,1) 75%)'
    };
  }
}
