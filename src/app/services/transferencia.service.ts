
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: Transferencia[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }
  get transferencias(){
    return this.listaTransferencia;
  }
  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia)

  }
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }
  private hidratar(transferencia: Transferencia){
    transferencia.data = new Date();
  }
}
