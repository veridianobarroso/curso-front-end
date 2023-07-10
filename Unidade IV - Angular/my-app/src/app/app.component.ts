import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  listagem:any[]=[]
  nome:string='oi'
  mostrar:boolean = true

  formulario !: FormGroup;
   
  constructor(private meuServico: MyServiceService, private formBuilder: FormBuilder,){
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['']
    });
  }

  adicionar() : void{
    this.meuServico.adicionarDado(this.formulario.controls['nome'].value);
    this.formulario.reset();
  }

  listar(){
    this.listagem = this.meuServico.obterDados();
  }
  zerar(){
    this.listagem = this.meuServico.zerar();
  }
}
