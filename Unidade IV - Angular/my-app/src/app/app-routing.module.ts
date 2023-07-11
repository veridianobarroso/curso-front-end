import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './gerenciador/painel/painel.component';
import { NoticiasComponent } from './gerenciador/noticias/noticias.component';
import { CadastroComponent } from './gerenciador/cadastro/cadastro.component';
import { TesteComponent } from './teste/teste.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
 

const routes: Routes = [
  { path:'', component:AutenticarComponent, pathMatch: 'full', title:'Login' },
  { path:'teste', component:TesteComponent, pathMatch: 'full', title:'Teste' },
  { path:'detalhe/:id', component:DetalheComponent, title:'Detalhe'},
  { path: 'painel', component: PainelComponent, title:' Painel', 
    children:[
      { path: '', component: NoticiasComponent, title: 'Início', outlet: 'painel', },
      { path: 'noticias', component: NoticiasComponent, title: 'Início', outlet: 'painel', },
      { path: 'cadastro', component: CadastroComponent, title: 'Início', outlet: 'painel', },
    ] 
  },
  { path: 'noticias', component: NoticiasComponent,title:'Noticias'  },
  { path: 'cadastro', component: CadastroComponent, title:'Cadastro'  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
