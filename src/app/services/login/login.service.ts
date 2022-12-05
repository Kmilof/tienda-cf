import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { User } from 'src/app/data/interfaces/iuser.metadata';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  //crea la variable privada loged y la inicializa en false
  private loged=false;


  //crea la variable privada usersCollection de clase AngularFirestoreCollection de tipo User
  private usersCollection:AngularFirestoreCollection<User>


  //llama al servicio AngularFirestore y lo guarda en la variable privada db
  //llama al servicio CookieService y lo guarda en la variable privada cookieService
  constructor(private db:AngularFirestore,private cookieService:CookieService){
    //guarda en la variable usersCollection la colección 'users' que retorna la función de firestore
    this.usersCollection=this.db.collection('users');
  }


  //retorna la colección de usuarios
  getUsers(){
    return this.usersCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }


  //recibe un formGroup como parametro con los datos del usuario que intenta hacer el login
  //recibe la colección de usuarios
  login(form:FormGroup,usersCollection:User[]){
    let text='No Inicio'
    //comprueba que el formulario sea valido
    if(form.valid){
      //recorre la colección de usuarios
      usersCollection.forEach(
        //comprueba si el usuario ingresado existe en la base de datos
        user=>{
          if(form.value.username==user.username){
            if(form.value.password==user.password){
              //realiza el login
              this.loged=true
              this.cookieService.set('sesionIniciada',this.loged.toString())
              text='Inició Sesión'
            }
          }
        }
      )
      alert(text)
    }
  }


  //comprueba por medio de la cookie si el usuario ya esta logueado
  isLoged(){
    if(this.cookieService.get('sesionIniciada')==='true'){
      this.loged=true
    }
    return this.loged
  }


  //desloguea al usuario
  logOut(){
    this.cookieService.delete('sesionIniciada','/','localhost',false,'Lax')
    this.loged=false
    return this.loged
  }


}
