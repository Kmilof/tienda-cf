import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(private auth:AngularFireAuth,private cookie:CookieService,private router:Router) { }

  private loged=false
  
  async loginWithGoogle(){
    let referenceProvider=new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider);
    this.auth.authState.subscribe(
      async user=>{
        await user?.getIdToken()
        .then(
          token=>{
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

  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token=await user?.getIdToken()
        console.log(token)
      }
    )
  }

  isLoged(){
    if(this.cookie.get('idToken')==='true'){
      this.loged=true
    }
    return this.loged
  }

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
