import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { PedidoEntregaDTO } from "../../models/PedidoEntregaDTO";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class PedidoEntregaService {

    constructor(public http: HttpClient ){

    }

    findAll() : Observable<PedidoEntregaDTO[]> {
        return this.http.get<PedidoEntregaDTO[]>(`${API_CONFIG.baseUrl}/pedidoEntregas`);
    }

    findById(id: number) : Observable<PedidoEntregaDTO> {
        return this.http.get<PedidoEntregaDTO>(
            `${API_CONFIG.baseUrl}/pedidoEntregas/${id}`);
    }

    insert(pedidoEntrega: PedidoEntregaDTO){
      return this.http.post(`${API_CONFIG.baseUrl}/pedidoEntregas`, 
                              pedidoEntrega, {
                                  observe: 'response', 
                                  responseType: 'text'
                              });
  }

  update(pedidoEntrega: PedidoEntregaDTO){
      return this.http.put(`${API_CONFIG.baseUrl}/pedidoEntregas/${pedidoEntrega.id}`, 
                              pedidoEntrega, {
                                  observe: 'response', 
                                  responseType: 'text'
                              });
  }
      

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/pedidoEntregas/${id}`)
    }
}