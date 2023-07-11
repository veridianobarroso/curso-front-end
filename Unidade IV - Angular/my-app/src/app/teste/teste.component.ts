import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  title = 'my-app';
  
  listagem:any[]=[]
  nome:string='teste do ngIf'
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



