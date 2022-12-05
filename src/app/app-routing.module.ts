import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { FemaleComponent } from './views/female/female.component';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { HomeComponent } from './views/home/home.component';
import { KidsComponent } from './views/kids/kids.component';
import { LoginComponent } from './views/login/login.component';
import { MaleComponent } from './views/male/male.component';
import { NewsComponent } from './views/news/news.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'male',
    component: MaleComponent
  },
  {
    path: 'female',
    component: FemaleComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AdminGuardGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
