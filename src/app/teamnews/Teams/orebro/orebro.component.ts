import { Component } from '@angular/core';

@Component({
  selector: 'app-orebro',
  templateUrl: './orebro.component.html',
  styleUrls: ['./orebro.component.css']
})
export class OrebroComponent {

  name: string = "Örebro SK"
  query: string = "örebro AND allsvenskan";
  logo: string = "https://www.fotbollskanalen.se/ImageHandler.axd?imageFormat=original&guid=9bc3e511-1412-4f53-80c9-6a5d2fb3ae3b&fileExtension=svg"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }
}
