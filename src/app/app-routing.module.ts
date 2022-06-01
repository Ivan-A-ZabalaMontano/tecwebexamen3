import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirugiasComponent } from './cirugias/cirugias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { PlantelComponent } from './plantel/plantel.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'servicios',component:ServiciosComponent
  },
  {
    path:'plantel',component:PlantelComponent
  },
  {
    path:'reservas',component:ReservasComponent
  },
  {
    path:'cirugias',component:CirugiasComponent
  },
  {
    path:'contacto',component:ContactoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
