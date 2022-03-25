

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PerfilEmpleadorComponent } from './Components/perfil-empleador/perfil-empleador.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { PagePriComponent } from './Components/page-pri/page-pri.component';
import { DetailsComponent } from './Components/details/details.component';
import { DetailsEmpleadorComponent } from './Components/details-empleador/details-empleador.component';
import { FooterComponent } from './Components/footer/footer.component';




const routes: Routes = [
  {path: 'Perfilempleador', component: PerfilEmpleadorComponent },
  {path: '', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: PagePriComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'datailsempleador', component: DetailsEmpleadorComponent},
  {path: 'footer', component: FooterComponent},

  {path: '404', component:NotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
