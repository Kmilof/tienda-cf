import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../../services/products/getProducts.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  //declaro e inicializao todas las variables necesarias para los filtros de las cartas
  male=true;
  female=true;
  kids=true;
  tshirts=true;
  pants=true;
  shoes=true;
  prueba=true;
  filterGender=false;
  filterType=false;
  colorMale='primary';
  colorFemale='primary';
  colorKids='primary';
  colorTShirts='primary';
  colorPants='primary';
  colorShoes='primary';
  colorGender='primary';
  colorType='primary';
  titleMale='Ocultar Productos Masculinos';
  titleFemale='Ocultar Productos Femeninos';
  titleKids='Ocultar Productos Infantiles';
  titleTShirts='Ocultar Camisetas';
  titlePants='Ocultar Pantalones';
  titleShoes='Ocultar Zapatos';
  

  //muestra y oculta los filtros correspondientes mediante el parametro ingresado de tipo string
  showFilter(id:string){
    //comprueba si el parametro ingresado es 'gender'
    if(id=='gender'){
      //comprueba si el filtro por genero esta visible o no
      if(this.filterGender==false){
        //si el filtro de genero esta oculto, lo muestra
        return ((this.colorGender='danger')&&(this.colorType='primary')
        &&(this.colorMale='primary')&&(this.titleMale='Ocultar Productos Masculinos')&&(this.male=true)
        &&(this.colorFemale='primary')&&(this.titleFemale='Ocultar Productos Femeninos')&&(this.female=true)
        &&(this.colorKids='primary')&&(this.titleKids='Ocultar Productos Infantiles')&&(this.kids=true)
        &&(this.filterGender=true)&&(this.filterType=false))
      }else{
        //si el filtro de genero visible, lo oculta
        return ((this.colorGender='primary')&&(this.filterGender=false)
        &&(this.colorMale='danger')&&(this.titleMale='Mostrar Productos Masculinos')&&(this.male=false)
        &&(this.colorFemale='danger')&&(this.titleFemale='Mostrar Productos Femeninos')&&(this.female=false)
        &&(this.colorKids='danger')&&(this.titleKids='Mostrar Productos Infantiles')&&(this.kids=false))
      }
    }else{
      //comprueba si el parametro ingresado es 'type'
      if(id=='type'){
        //comprueba si el filtro por tipo esta visible o no
        if(this.filterType==false){
          //si el filtro de tipo esta oculto, lo muestra
          return ((this.colorType='danger')&&(this.colorGender='primary')
          &&(this.colorTShirts='primary')&&(this.titleTShirts='Ocultar Camisetas')&&(this.tshirts=true)
          &&(this.colorPants='primary')&&(this.titlePants='Ocultar Pantalones')&&(this.pants=true)
          &&(this.colorShoes='primary')&&(this.titleShoes='Ocultar Zapatos')&&(this.shoes=true)
          &&(this.filterType=true)&&(this.filterGender=false))
        }else{
          //si el filtro de tipo esta visible, lo oculta
          return ((this.colorType='primary')&&(this.filterType=false)
          &&(this.colorTShirts='danger')&&(this.titleTShirts='Mostrar Camisetas')&&(this.tshirts=false)
          &&(this.colorPants='danger')&&(this.titlePants='Mostrar Pantalones')&&(this.pants=false)
          &&(this.colorShoes='danger')&&(this.titleShoes='Mostrar Zapatos')&&(this.shoes=false))
        }
      }
    }
    return false
  }

  
  //muestra los productos cuando no hay un filtro desplegado y evita que se dupliquen los productos
  showSuportView(id:string){
    if(id=='gender'){
      if(this.colorGender=='danger'){
        return (this.prueba=false)
      }else{
        return (this.prueba=true)
      }
    }else{
      if(id=='type'){
        if(this.colorType=='danger'){
          return (this.prueba=false)
        }else{
          return (this.prueba=true)
        }
      }
    }
    return false
  }


  //activa y desactiva los filtros correspondientes al genero
  showProductByGender(id:string){
    //comprueba si el filtro presionado es el filtro masculino
    if(id=='male'){
      //comprueba si el filtro masculino esta activado o desactivado
      if(this.colorMale=='primary'){
        //oculta los productos masculino
        return ((this.colorMale='danger')&&(this.titleMale='Mostrar Productos Masculinos')&&(this.male=false))
      }else{
        //muestra los productos masculinos
        return ((this.colorMale='primary')&&(this.titleMale='Ocultar Productos Masculinos')&&(this.male=true))
      }
    }else{
      //comprueba si el filtro presionado es el filtro femenino
      if(id=='female'){
        //comprueba si el filtro femenino esta activado o desactivado
        if(this.colorFemale=='primary'){
          //oculta los productos femeninos
          return ((this.colorFemale='danger')&&(this.titleFemale='Mostrar Productos Femeninos')&&(this.female=false))
        }else{
          //muestra los productos femeninos
          return ((this.colorFemale='primary')&&(this.titleFemale='Ocultar Productos Femeninos')&&(this.female=true))
        }
      }else{
        //comprueba si el filtro presionado es el filtro infantil
        if(id=='kids'){
          //comprueba si el filtro infantil esta activado o desactivado
          if(this.colorKids=='primary'){
            //oculta los productos infantiles
            return ((this.colorKids='danger')&&(this.titleKids='Mostrar Productos Infantiles')&&(this.kids=false))
          }else{
            //muestra los productos infantiles
            return ((this.colorKids='primary')&&(this.titleKids='Ocultar Productos Infantiles')&&(this.kids=true))
          }
        }
      }
    }
    return false
  }


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


