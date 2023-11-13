import { Component } from '@angular/core';

@Component({
  selector: 'app-degerfors',
  templateUrl: './degerfors.component.html',
  styleUrls: ['./degerfors.component.css']
})
export class DegerforsComponent {
  name: string = "Degerfors IF"
  query: string = "degerfors AND allsvenskan";
  logo: string = "https://imageproxy.a2d.tv/?format=png&width=186&source=https%3a%2f%2fwww.fotbollskanalen.se%2fImageHandler.axd%3fimageFormat%3doriginal%26guid%3d984b358c-3005-43d3-a52b-9beaca1f0d4b"
  img: any = {};


  ngOnInit(): void {
    this.img = {
      background: 'linear-gradient(90deg, rgba(255,0,0,1) 20%, rgba(255,255,255,1) 50%, rgba(255,0,0,1) 80%)'
    };
  }
}
