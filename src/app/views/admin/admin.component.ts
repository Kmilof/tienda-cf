import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../../services/products/getProducts.service';
import { StorageService } from '../../services/storage/storage.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  //llama al servicio GetProductsService y lo guarda en la variable privada productsService
  //llama al servicio StorageService y lo guarda en la variable privada storageService
  constructor(private productsService:GetProductsService, private storageService:StorageService) { }


  //crea el array products de tipo Product
  products:Product[];


  //crea la variable image de tipo string
  image:string;


  //crea la variable nameImage de tipo string, para identificar a la imagen
  nameImage:string;


  //guarda en la variable products la colección que retorna el servicio productsService con la funcion getProducts()
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(product=>{
      this.products=product;
    })
  }


  //crea la variable modalVisible de tipo boolean y la inicia en false
  modalVisible=false;


  //crea la variable textButton de tipo string
  textButton:string;


  //crea la variable productSelected de tipo Product
  productSelected:Product;


  //crea la variable editVisible de tipo boolean y la inicia en true
  editVisible=true;


  //crea la variable addVisible de tipo boolean y la inicia en true
  addVisible=true;


  //crea la variable newProduct la asigna el FormGroup
  newProduct=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl(''),
    price:new FormControl(0,Validators.required),
    type:new FormControl('',Validators.required),
    news:new FormControl(false,Validators.required),
    tshirt:new FormControl(false,Validators.required),
    pant:new FormControl(false,Validators.required),
    shoe:new FormControl(false,Validators.required),
    image:new FormControl('')
  })


  //muestra el dialog
  showModal(){
    //limpia el valor de image
    this.image=''
    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible;
    //le asigna el string a textButton
    this.textButton='Agregar Producto';
    //cambia editVisibela a false
    this.editVisible=false;
    //cambia addVisible a true
    this.addVisible=true;
    //resetea los FormControll
    this.newProduct.reset()
  }


  //guarda la imagen ingresada en el formulario
  loadImage(event:any){
    let archive=event.target.files[0]
    let reader=new FileReader()
    if(archive!=undefined){
      reader.readAsDataURL(archive)
      reader.onloadend=()=>{
        let url=reader.result
        if(url!=null){
          this.nameImage=archive.name;
          this.image=url.toString();
        }
      }
    }
  }


  //agrega producto
  addProduct(){
    //prueba si el FormGroup de newProduct es valido
    if(this.newProduct.valid){
      //crea el objeto newProduct de tipo Product y le asigna los valores del parametro
      let newProduct:Product={
        name:this.newProduct.value.name!,
        description:this.newProduct.value.description!,
        price:this.newProduct.value.price!,
        type:this.newProduct.value.type!,
        news:this.newProduct.value.news!,
        tshirt:this.newProduct.value.tshirt!,
        pant:this.newProduct.value.pant!,
        shoe:this.newProduct.value.shoe!,
        image:'',
        id:""
      }
      //convierte los valores nulos del objeto en booleans en false
      if(newProduct.news==null){
        newProduct.news=false;
      }
      if(newProduct.tshirt==null){
        newProduct.tshirt=false;
      }
      if(newProduct.pant==null){
        newProduct.pant=false;
      }
      if(newProduct.shoe==null){
        newProduct.shoe=false;
      }
      //sube el objeto newProduct a la colección de la base de datos por medio del servicio productsService 
      //con la funcion createProduct()
      this.storageService.uploadImage(this.nameImage,this.image).
      then(async res=>{
        this.storageService.obtainImage(res)
        .then(async url=>{
          await this.productsService.createProduct(newProduct,url).
          then(product=>{
            alert('Producto Agregado')
          })
          .catch(error=>{
            alert('Error = '+error)
          })
        })
      })
    }else{
      //muestra error
      alert('Error')
    }
    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible
    //resetea los FormControll
    this.newProduct.reset()
  }


  //crea la variable deleteVisible de tipo boolean y la inicia en true
  deleteVisible=false;


  //crea la variable idSelected de tipo string
  idSelected:string;
  

  //muestra el dialog de delete y retorna el idSelected
  showDelete(product:Product){
    this.productSelected=product
    //le asigna el id del product deseado al parametro idProduct
    this.idSelected=product.id
    //cambia el boolean de deleteVisible
    this.deleteVisible=!this.deleteVisible
    //retorma el id seleccionado
    return this.idSelected
  }
  //oculta el dialog de delete
  showConfirm(){
    this.deleteVisible=!this.deleteVisible
  }


  //borra producto
  deleteProduct(){
    //por medio de su id, busca el product deseado en la colección de la base de datos por medio del servicio 
    //productsService y con la función deleteProduct() lo elimina de la base de datos
    this.productsService.deleteProduct(this.idSelected).then(product=>{
      this.storageService.deleteImage(this.productSelected.image)
      alert('Producto Eliminado')})
    //muestra error
    .catch(error=>{alert('Error')+error})
  }
  

  //muestra el dialog de edit
  showEdit(product:Product){
    this.image=product.image
    //crea el objeto productSelected del tipo Product y le asigna los valores del parametro product
    this.productSelected=product
    this.newProduct.setValue({
      name:product.name,
      description:product.description!,
      price:product.price,
      type:product.type,
      news:product.news,
      tshirt:product.tshirt,
      pant:product.pant,
      shoe:product.shoe,
      image:product.image
    })


    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible;

    //cambia el boolean de editVisible a false
    this.editVisible=true;

    //cambia el boolean de addVisible a false
    this.addVisible=false;

    //le asigna el string a textButton
    this.textButton='Actualizar Producto';
  }


  //edita producto
  updateProduct(){
    //crea el objeto newDates de tipo Product y le asigna los valores de newProduct
    let newDates:Product={
      name:this.newProduct.value.name!,
      description:this.newProduct.value.description!,
      price:this.newProduct.value.price!,
      type:this.newProduct.value.type!,
      news:this.newProduct.value.news!,
      tshirt:this.newProduct.value.tshirt!,
      pant:this.newProduct.value.pant!,
      shoe:this.newProduct.value.shoe!,
      image:'',
      id:this.productSelected.id
    }
    //por medio de su id, busca el producto deseado en la colección de la base de datos por medio del servicio 
    //productsService con la función editProduct() lo edita de la base de datos
    if(this.image!=''){
      newDates.image = this.image
      this.productsService.editProduct(newDates.id,newDates).
        then(product=>{
          alert('Producto Actualizado')
        })
        .catch(error=>{
          alert('Error = '+error)
        })
    }
    this.modalVisible=!this.modalVisible;
  }


  //crea las variables de boolean necesarias para los checkbox del formulario y los inicializa en false
  checkedNews:boolean=false
  checkedTshirt:boolean=false
  checkedPant:boolean=false
  checkedShoe:boolean=false
  checkedMale:boolean=false
  checkedFemale:boolean=false
  checkedKids:boolean=false


  //recibe como parametro un string con el tipo del producto
  //convierte las variables que no coinciden con el tipo ingresado el false
  prueba(id:string){
    if(id=='tshirt'){
      this.checkedPant=false
      this.checkedShoe=false
    }else{
      if(id=='pant'){
        this.checkedTshirt=false
        this.checkedShoe=false
      }else{
        if(id=='shoe'){
          this.checkedTshirt=false
          this.checkedPant=false
        }
      }
    }
  }


  //recibe como parametro un string con el genero del producto
  //convierte las variables que no coinciden con el genero ingresado en false
  gender(id:string){
    if(id=='male'){
      this.checkedFemale=false
      this.checkedKids=false
    }else{
      if(id=='female'){
        this.checkedMale=false
        this.checkedKids=false
      }else{
        if(id=='kids'){
          this.checkedMale=false
          this.checkedFemale=false
        }
      }
    }
  }
}

