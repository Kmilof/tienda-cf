import { Injectable } from '@angular/core';
import { deleteObject, getDownloadURL, getStorage, ref, UploadResult, uploadString } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  //crea la variable privada response de tipo UploadResult
  private response:UploadResult;


  //crea la variable privada storage y le asigna getStorage()
  private storage=getStorage();


  constructor() { }


  //toma como parametros una variable name de tipo string
  //toma como parametros una variable image de tipo any
  async uploadImage(name:string,image:any){
    try{
      //crea una referencia de la imagen
      let referenceImage=ref(this.storage,'Products/'+name);
      //sube la imagen a la base de datos
      this.response=await uploadString(referenceImage,image,'data_url')
      .then(resp=>{
        return resp
      })
      return this.response
    }
    catch(error){
      console.log(error);
      return this.response
    }
  }
  

  //toma la variable response de uploadImage y retorna su referencia
  obtainImage(response:UploadResult){
    return getDownloadURL(response.ref);
  }


  //toma como parametro la imagen ingresada y la borra de la base de datos
  deleteImage(image:string){
    let reference=ref(this.storage,image);
    deleteObject(reference).then(answer=>{
      alert('Imagen Eliminada');
    })
    .catch(error=>{
      alert('Error: '+error);
    })
  }
}

