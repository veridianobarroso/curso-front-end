import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private apiURL : string ='';
private apiCNPJ : string ='';

constructor(private http: HttpClient) { 
  this.apiURL = 'https://172.128.0.1/api'
  this.apiCNPJ = 'https://publica.cnpj.ws/cnpj'
}

   getPessoa() : Observable<IPessoa[]>{
    return  this.http.get<IPessoa[]>("../../assets/pessoa.json") 
   }

 
 consultarCNPJ(cnpj : string) : Observable <any>{

   return this.http.get(`${this.apiCNPJ}/${cnpj}`).pipe(
     res => res, erro => erro
   );
 }




   setPessoa(pessoa: IPessoa) : Observable <any>{
    // console.log(documento);
    return this.http.post(`${this.apiURL}`,pessoa).pipe(
      res => res, erro => erro
    );
  }
  editarPessoa(documento: IPessoa) : Observable <any>{
    // console.log(documento);
    return this.http.put(`${this.apiURL}${documento.id}`,documento).pipe(
      res => res, erro => erro
    );
  }
  deletePessoa(documento: IPessoa) : Observable <any>{
    // console.log(documento);
    return this.http.put(`${this.apiURL}${documento.id}`,documento).pipe(
      res => res, erro => erro
    );
  }
  getPessoas():Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiURL}`).pipe(
      res => res, erro => erro
    );
  }

}

interface IPessoa {
  id: number,
  name: string
}