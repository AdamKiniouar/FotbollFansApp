import { Component } from '@angular/core';

@Component({
  selector: 'app-halmstad',
  templateUrl: './halmstad.component.html',
  styleUrls: ['./halmstad.component.css']
})
export class HalmstadComponent {
  name: string = "Halmstads BK"
  query: string = "halmstad AND allsvenskan";
  logo: string = "https://imageproxy.a2d.tv/?format=png&width=186&source=https%3a%2f%2fwww.fotbollskanalen.se%2fImageHandler.axd%3fimageFormat%3doriginal%26guid%3dc8b30b72-cf0e-4533-a62c-322a1e80824a"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(36,37,252,1) 25%, rgba(227,227,255,1) 50%, rgba(53,39,255,1) 75%)'
    };
  }
}
