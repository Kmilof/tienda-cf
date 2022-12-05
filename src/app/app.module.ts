
//NgModule
import { NgModule } from '@angular/core';

//components
import { AdminComponent } from './views/admin/admin.component';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FemaleComponent } from './views/female/female.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { KidsComponent } from './views/kids/kids.component';
import { LoginComponent } from './views/login/login.component';
import { MaleComponent } from './views/male/male.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NewsComponent } from './views/news/news.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule} from 'primeng/toast';

//services
import { GetProductsService } from './services/products/getProducts.service';
import { StorageService } from './services/storage/storage.service';
import { LoginService } from './services/login/login.service';
import { GoogleLoginService } from './services/googleLogin/google-login.service';


@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    CardProductComponent,
    CarouselComponent,
    FemaleComponent,
    FooterComponent,
    HomeComponent,
    KidsComponent,
    LoginComponent,
    MaleComponent,
    MenubarComponent,
    NavigationComponent,
    NewsComponent,
    SkeletonComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CarouselModule,
    CheckboxModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [GetProductsService,GoogleLoginService,LoginService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

