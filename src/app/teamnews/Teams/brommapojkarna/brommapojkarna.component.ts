import { Component } from '@angular/core';

@Component({
  selector: 'app-brommapojkarna',
  templateUrl: './brommapojkarna.component.html',
  styleUrls: ['./brommapojkarna.component.css']
})
export class BrommapojkarnaComponent {
  name: string = "IF Brommapojkarna "
  query: string = "brommapojkarna AND allsvenskan";
  logo: string = "https://imageproxy.a2d.tv/?format=png&width=186&source=https%3a%2f%2fwww.fotbollskanalen.se%2fImageHandler.axd%3fimageFormat%3doriginal%26guid%3ddac3695c-f700-418d-a311-5ef2fd43a713"
  img: any = {};


  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 80%)'
    };
  }
}

