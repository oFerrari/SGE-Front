import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { VeiculoDTO } from "src/app/models/VeiculoDTO";

@Injectable()
export class VeiculoService {

    constructor(public http: HttpClient ){

    }

    findAll() : Observable<VeiculoDTO[]> {
        return this.http.get<VeiculoDTO[]>(`${API_CONFIG.baseUrl}/veiculos`);
    }

    findById(id: number) : Observable<VeiculoDTO> {
        return this.http.get<VeiculoDTO>(
            `${API_CONFIG.baseUrl}/veiculos/${id}`);
    }

    insert(veiculo: VeiculoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/veiculos`, 
                                veiculo, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(veiculo: VeiculoDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/veiculos/${veiculo.id}`, 
                                veiculo, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/veiculos/${id}`)
    }
}