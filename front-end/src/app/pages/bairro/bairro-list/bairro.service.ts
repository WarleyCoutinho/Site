import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bairro } from '../bairro';

@Injectable({
  providedIn: 'root',
})
export class BairroService {
  ///endereço da API do back end
  protected url = `http://localhost:8080/bairros`;

  ///endereço da API do back end em produção
  ///protected url = `https://wc-system-api.herokuapp.com/bairros`;


  constructor(private http: HttpClient) {}

  ////função de listar

  fiandAll(): Observable<Bairro[]> {
    return this.http.get<Bairro[]>(this.url);
  }

  ///função de deletar
  deleteByid(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  ////////função de salvar
  save(data: Bairro): Observable<Bairro> {
    if (data.id) {
      return this.http.put<Bairro>(this.url, data);
    } else {
      return this.http.post<Bairro>(this.url, data);
    }
  }

  /// função de listar ou buscar por id
  findById(id: number): Observable<Bairro> {
    return this.http.get<Bairro>(`${this.url}/${id}`);
  }
}
