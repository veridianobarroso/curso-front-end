import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GerenciadorModule } from './gerenciador/gerenciador.module';
import { TesteComponent } from './teste/teste.component';
import { RouterModule } from '@angular/router';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [								
    AppComponent,
      TesteComponent,
      AutenticarComponent,
      DetalheComponent
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
