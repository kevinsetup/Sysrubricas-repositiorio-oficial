import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './components/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './components/unidad-academica/unidad-academica/unidad-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent,
    UnidadAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
