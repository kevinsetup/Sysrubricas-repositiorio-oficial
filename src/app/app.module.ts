import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './components/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './components/unidad-academica/unidad-academica/unidad-academica.component';
import { LineaAcademicaComponent } from './components/LineaAcademica/linea-academica/linea-academica.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { PlanAcademicoComponent } from './components/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './components/PlanLinea/plan-linea/plan-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent,
    UnidadAcademicaComponent,
    LineaAcademicaComponent,
    MenuComponent,
    FooterComponent,
    PlanAcademicoComponent,
    PlanLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
