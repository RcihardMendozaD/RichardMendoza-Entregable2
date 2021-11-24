import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Routers refresh page*/
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanPrincipianteComponent } from './plan-principiante/plan-principiante.component';
import { PlanAvanzadoComponent } from './plan-avanzado/plan-avanzado.component';
import { PlanDefinicionComponent } from './plan-definicion/plan-definicion.component';
import { PlanVolumenComponent } from './plan-volumen/plan-volumen.component';
import { PlanObjetivoComponent } from './plan-objetivo/plan-objetivo.component';




const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'planes', component:PlanesComponent},
  {path:'plan-principiante', component:PlanPrincipianteComponent},
  {path:'plan-avanzado', component:PlanAvanzadoComponent},
  {path:'plan-objetivo', component:PlanObjetivoComponent},
  {path:'plan-definicion', component:PlanDefinicionComponent},
  {path:'plan-volumen', component:PlanVolumenComponent},
  {path:'', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
