import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit, DoCheck  {

  pessoa: any = []
  filtrado : any =[]
  id!:number


  constructor(private route: ActivatedRoute, private api: ApiService) { 
    this.route.params.subscribe(
      res => { 
        this.id = res['id']
        //console.log(res['id']) 
      });
  }

  ngOnInit() {

    this.api.getPessoa().subscribe(
      data => {
        this.pessoa = data
        // console.log(this.pessoa );
      }
    )

   
  }

  ngDoCheck(): void {
    this.filtrar(this.id)
  }
  
  filtrar(id:number){
    for(let i of this.pessoa){
      if (i.id == id ){ 
        console.log(i.id + " - " + i.name);
      }
    }
  }

}
 