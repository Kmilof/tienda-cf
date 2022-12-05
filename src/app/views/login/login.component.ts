import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../data/interfaces/iuser.metadata';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //crea la coleccion usersCollection de tipo User
  usersCollection:User[]=[];


  //crea el formGroup userData del formulario
  userData=new FormGroup(
    {
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )


  //llama al servicio LoginService y lo fuarda en la variable privada usersService
  //llama al servicio Router y lo guarda en la variable privada router
  constructor(private usersService:LoginService,private router:Router) { }


  //guarda en la variable users la colección que retorna el servicio usersService con la función getUsers()
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      users=>this.usersCollection=users
    )
  }


  //realiza el log in con los datos ingresados al formulario
  logIn(){
    //realiza el log in del usuario mediante el servicio login()
    //comparando los datos ingresados al formulario con los de la colección de usuarios
    this.usersService.login(this.userData,this.usersCollection);
    this.router.navigateByUrl("admin").then(
      reDirectTo=>window.location.reload()
    )
  }


}
