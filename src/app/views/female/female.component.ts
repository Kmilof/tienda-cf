import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../../services/products/getProducts.service';



@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})

export class FemaleComponent implements OnInit {


  //declaro e inicializao todas las variables necesarias para los filtros de las cartas
  tshirts=true;
  pants=true;
  shoes=true;
  prueba=true;
  colorTShirts='primary';
  colorPants='primary';
  colorShoes='primary';
  colorType='primary';
  titleTShirts='Ocultar Camisetas';
  titlePants='Ocultar Pantalones';
  titleShoes='Ocultar Zapatos';


  //activa y desactiva los filtros correspondientes al tipo de producto
  showProductByType(id:string){
    //comprueba si el filtro presionado es el filtro de remeras
    if(id=='tshirts'){
      //comprueba si el filtro de remeras esta activado o desactivado
      if(this.colorTShirts=='primary'){
        //oculta los productos de tipo remera
        return ((this.colorTShirts='danger')&&(this.titleTShirts='Mostrar Camisetas')&&(this.tshirts=false))
      }else{
        //muestra los productos de tipo remera
        return ((this.colorTShirts='primary')&&(this.titleTShirts='Ocultar Camisetas')&&(this.tshirts=true))
      }
    }else{
      //comprueba si el filtro presionado es el filtro de pantalones
      if(id=='pants'){
        //comprueba si el filtro de pantalones esta activado o desactivado
        if(this.colorPants=='primary'){
          //oculta los productos de tipo pantalones
          return ((this.colorPants='danger')&&(this.titlePants='Mostrar Pantalones')&&(this.pants=false))
        }else{
          //muestra los productos de tipo pantalones
          return ((this.colorPants='primary')&&(this.titlePants='Ocultar Pantalones')&&(this.pants=true))
        }
      }else{
        //comprueba si el filtro presionado es el filtro de zapatos
        if(id=='shoes'){
          //comprueba si el filtro de zapatos esta activado o desactivado
          if(this.colorShoes=='primary'){
            //oculta los productos de tipo zapatos
            return ((this.colorShoes='danger')&&(this.titleShoes='Mostrar Zapatos')&&(this.shoes=false))
          }else{
            //muestra los productos de tipo zapatos
            return ((this.colorShoes='primary')&&(this.titleShoes='Ocultar Zapatos')&&(this.shoes=true))
          }
        }
      }
    }
    return false
  }


  //llama al servicio GetProductsService y lo guarda en la variable privada productsService
  constructor(private productsService:GetProductsService) { }
  

  //crea el array products de tipo Product
  products:Product[];


  //guarda en la variable products la colección que retorna el servicio productsService con la funcion getProducts()
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(product=>{
      this.products=product;
    })
  }

}

