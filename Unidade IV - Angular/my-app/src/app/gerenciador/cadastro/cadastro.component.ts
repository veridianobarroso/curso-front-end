import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cnpj!:string

  constructor( private api: ApiService) { }

  ngOnInit() {
    this.consultarCNPJ()
  }

  consultarCNPJ(){
     
      this.cnpj =  "00394460005887"

      if(this.cnpj.length == 14 ){
         
    
        this.api.consultarCNPJ(this.cnpj).subscribe({
          next:(data) => {
             
            console.log(data)
           
          }
        });
      }
      // 00394460005887
    
    }
}
