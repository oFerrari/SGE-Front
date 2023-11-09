import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { MotoristaDTO } from "../../models/MotoristaDTO";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class MotoristaService {

    constructor(public http: HttpClient ){

    }

    findAll() : Observable<MotoristaDTO[]> {
        return this.http.get<MotoristaDTO[]>(`${API_CONFIG.baseUrl}/motoristas`);
    }

    findById(id: number) : Observable<MotoristaDTO> {
        return this.http.get<MotoristaDTO>(
            `${API_CONFIG.baseUrl}/motoristas/${id}`);
    }

    insert(motorista: MotoristaDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/motoristas`, 
                                motorista, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(motorista: MotoristaDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/motoristas/${motorista.id}`, 
                                motorista, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/motoristas/${id}`)
    }
}