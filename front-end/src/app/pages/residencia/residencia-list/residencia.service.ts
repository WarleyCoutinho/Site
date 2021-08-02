import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residencia } from '../residencia';

@Injectable({
  providedIn: 'root',
})
export class ResidenciaService {
  ///endereço da API do back end
  protected url = `http://localhost:8080/residencias`;
  
  ///endereço da API do back end em produção
  ///protected url = `https://wc-system-api.herokuapp.com/residencias`;
  constructor(private http: HttpClient) {}

  ////função de listar

  fiandAll(): Observable<Residencia[]> {
    return this.http.get<Residencia[]>(this.url);
  }

  ///função de deletar
  deleteByid(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  ////////função de salvar
  save(data: Residencia): Observable<Residencia> {
    if (data.id) {
      return this.http.put<Residencia>(this.url, data);
    } else {
      return this.http.post<Residencia>(this.url, data);
    }
  }

  /// função de listar ou buscar por id
  findById(id: number): Observable<Residencia> {
    return this.http.get<Residencia>(`${this.url}/${id}`);
  }

  /// função de listar 
  findBy(): Observable<Residencia> {
    return this.http.get<Residencia>(`${this.url}`);
  }
}
