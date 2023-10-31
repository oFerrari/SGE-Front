import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ClienteDTO } from "../../models/ClienteDTO";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<ClienteDTO[]> {
        return this.http.get<ClienteDTO[]>(`${API_CONFIG.baseUrl}/clientes`);
    }

    findById(id: number) : Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>(
            `${API_CONFIG.baseUrl}/clientes/${id}`);
    }

    insert(cliente: ClienteDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/clientes`, 
                                cliente, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(cliente: ClienteDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, 
                                cliente, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/clientes/${id}`)
    }
}