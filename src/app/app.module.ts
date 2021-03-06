import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PerfilEmpleadorComponent } from './Components/perfil-empleador/perfil-empleador.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PagePriComponent } from './Components/page-pri/page-pri.component';
import { DetailsComponent } from './Components/details/details.component';
import { DetailsEmpleadorComponent } from './Components/details-empleador/details-empleador.component';
import { PerfilEmpleadoComponent } from './Components/perfil-empleado/perfil-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilEmpleadorComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    PagePriComponent,
    DetailsComponent,
    DetailsEmpleadorComponent,
    FooterComponent,
    PerfilEmpleadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
