import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {


  //llama al servicio AngularFireAuth y lo guarda en la variable privada auth
  //llama al servicio CookieService y lo guarda en la variable privada cookie
  //llama al servicio Router y lo guarda en la variable privada router
  constructor(private auth:AngularFireAuth,private cookie:CookieService,private router:Router) { }


  //crea la variable privada loged y la inicializa en false
  private loged=false
  

  //realiza el login con google
  async loginWithGoogle(){
    let referenceProvider=new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider);
    this.auth.authState.subscribe(
      async user=>{
        await user?.getIdToken()
        .then(
          token=>{
            //guarda el token en el servicio cookie
            this.loged=true
            this.cookie.set('idToken',this.loged.toString())
            this.router.navigateByUrl('admin')
            let text='Inicio Sesion'
            alert(text)
          }
        )
        .catch(
          error=>{
            console.error('Ocurrió un Error: ',error)
          }
        )
      }
    )
  }


  //obtiene los usuarios
  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token=await user?.getIdToken()
        console.log(token)
      }
    )
  }


  //comprueba si el usuario ya se encuentra logueado
  isLoged(){
    if(this.cookie.get('idToken')==='true'){
      this.loged=true
    }
    return this.loged
  }


  //desloguea al usuario y borra el token del servicio cookie
  logOut(){
    this.auth.signOut().then(
      ()=>{
        this.cookie.delete('idToken','/','localhost',false,'Lax')
        alert('Cerro Sesion')
      }
    )
    this.loged=false
    return this.loged
  }
}

