import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GoogleLoginService } from '../../services/googleLogin/google-login.service';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  //llama al servicio Router y lo guarda en la variable privada router
  //llama al servicio LoginService y lo guarda en la variable privada login
  //llama al servicio GoogleLoginService y lo guarda en la variable privada google
  constructor(private router:Router,private login:LoginService,private google:GoogleLoginService) { }


  //crea la variable items de tipo MenuItem
  items: MenuItem[]=[];


  //crea la variable loged y la incializa en false
  loged=false;


  //crea la variable googleLoged y la inicializa en false
  googleLoged=false;


  ngOnInit(): void {
    //comprueba si el usuario ya se encuentra logueado
    this.loged=this.login.isLoged()
    //comprueba si el usuario ya se encuetra logueado con google
    this.google.getUser()
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Novedades',
        icon: 'pi pi-clock',
        routerLink: 'news'
      },
      {
        label: 'Hombre',
        icon: '',
        routerLink: 'male'
      },
      {
        label: 'Mujer',
        icon: '',
        routerLink: 'female'
      },
      {
        label: 'Niños',
        icon: '',
        routerLink: 'kids'
      },
      {
        label: 'Admin',
        icon: '',
        routerLink: 'admin'
      }
    ]
  }


  //loguea al usuario con la base de datos de firebase
  goToLogin(){
    this.router.navigateByUrl('login')
  }


  //desloguea al usuario con la base de datos de firebase
  logOut(){
    this.login.logOut()
    this.router.navigateByUrl('/')
    this.ngOnInit()
  }


  //loguea al usuario con el servicio de google
  googleLogin(){
    this.google.loginWithGoogle()
    this.ngOnInit()
  }

  
  //desloguea al usuario con el servicio de google
  googleLogOut(){
    this.google.logOut()
    this.router.navigateByUrl('/')
    this.ngOnInit
  }


}
