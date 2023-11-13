import { Component } from '@angular/core';

@Component({
  selector: 'app-varnamo',
  templateUrl: './varnamo.component.html',
  styleUrls: ['./varnamo.component.css']
})
export class VarnamoComponent {

  name: string = "IFK Värnamo";
  query: string = "värnamo AND allsvenskan";
  logo: string = "https://imageproxy.a2d.tv/?format=png&width=186&source=https%3a%2f%2fwww.fotbollskanalen.se%2fImageHandler.axd%3fimageFormat%3doriginal%26guid%3da651e243-3d01-4db3-ac7e-40d19563e9ee"
  img: any = {};

  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(36,37,252,1) 25%, rgba(227,227,255,1) 50%, rgba(53,39,255,1) 75%)'
    };
  }
}
