import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';



@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {


  //guard que cubre la ruta admin
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //comprueba la cookie para ver si esta logueado con cualquiera de las dos opciones
    if(this.cookie.check('sesionIniciada')||this.cookie.check('idToken')){
      return true
    }else{
      this.router.navigateByUrl('login')
      return false
    }
  }


  //llama al servicio LoginService y lo guarda en la variable privada loginService
  //llama al servicio Router y lo guarda en la variable privada router
  //llama al servicio CookieService y lo guarda en la variable privada cookie
  constructor(private loginService:LoginService,private router:Router, private cookie:CookieService){}
  

}
