import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  dados: any [] = [];

  adicionarDado(dado:any) : void {    
    this.dados.push(dado);
  }

  obterDados():any[]{
    return this.dados;
  }
  zerar(){
    return this.dados = []
  }
}
