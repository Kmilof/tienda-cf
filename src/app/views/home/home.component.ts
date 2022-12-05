import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  //crea la colección necesaria para el carrusel de novedades masculinas
  male = [
    {
      image: '../../../assets/images/home/male/carousel/image_0.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_1.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_2.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_3.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_4.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_5.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_6.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_7.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/male/carousel/image_8.jpg',
      name: 'Nombre 1',
      price: 10
    }
  ]


  //crea la colección necesaria para el carrusel de novedades femeninas
  female = [
    {
      image: '../../../assets/images/home/female/carousel/image_0.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_1.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_2.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_3.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_4.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_5.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_6.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_7.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/female/carousel/image_8.jpg',
      name: 'Nombre 1',
      price: 10
    }
  ]

  
  //crea la colección necesaria para el carrusel de novedades infantiles
  kids = [
    {
      image: '../../../assets/images/home/kids/carousel/image_0.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_1.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_2.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_3.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_4.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_5.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_6.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_7.jpg',
      name: 'Nombre 1',
      price: 10
    },
    {
      image: '../../../assets/images/home/kids/carousel/image_8.jpg',
      name: 'Nombre 1',
      price: 10
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
