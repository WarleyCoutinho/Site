import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../cidade';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  ///endereço da API do back end
  protected url = `http://localhost:8080/cidades`;

  constructor(private http: HttpClient) {}

  ////função de listar

  fiandAll(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url);
  }

  ///função de deletar
  deleteByid(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  ////////função de salvar
  save(data: Cidade): Observable<Cidade> {
    if (data.id) {
      return this.http.put<Cidade>(this.url, data);
    } else {
      return this.http.post<Cidade>(this.url, data);
    }
  }

  /// função de listar ou buscar por id
  findById(id: number): Observable<Cidade> {
    return this.http.get<Cidade>(`${this.url}/${id}`);
  }
}
