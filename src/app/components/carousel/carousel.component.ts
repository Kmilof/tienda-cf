import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  //input necesario para el funcionamiento del carrusel
  @Input() products = [{
    image:'',
    name:'',
    price:0
  }]


  //estilos responsivos de tamaño
  responsiveOptions = [
    {
      breakpoint: '1224px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '968px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '760px',
      numVisible: 1,
      numScroll: 1
    }
  ]


  constructor() { }

  ngOnInit(): void { }

}
