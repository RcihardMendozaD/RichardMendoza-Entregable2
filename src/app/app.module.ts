import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanPrincipianteComponent } from './plan-principiante/plan-principiante.component';
import { PlanAvanzadoComponent } from './plan-avanzado/plan-avanzado.component';
import { PlanDefinicionComponent } from './plan-definicion/plan-definicion.component';
import { PlanVolumenComponent } from './plan-volumen/plan-volumen.component';
import { PlanObjetivoComponent } from './plan-objetivo/plan-objetivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlanesComponent,
    PlanPrincipianteComponent,
    PlanAvanzadoComponent,
    PlanDefinicionComponent,
    PlanVolumenComponent,
    PlanObjetivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
