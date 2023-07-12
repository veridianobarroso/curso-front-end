import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PainelComponent } from './painel/painel.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [					
  PainelComponent,
   CadastroComponent,
   MenuComponent,
   NoticiasComponent
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonModule

  ],
  providers: [],
})
export class GerenciadorModule { }
