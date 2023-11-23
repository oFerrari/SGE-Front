import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { AdministradorDTO } from "src/app/models/AdministradorDTO";


@Injectable()
export class AdministradorService {

    constructor(public http: HttpClient ){

    }

    findAll() : Observable<AdministradorDTO[]> {
        return this.http.get<AdministradorDTO[]>(`${API_CONFIG.baseUrl}/administradores`);
    }

    findById(id: number) : Observable<AdministradorDTO> {
        return this.http.get<AdministradorDTO>(
            `${API_CONFIG.baseUrl}/administradores/${id}`);
    }

    insert(administrador: AdministradorDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/administradores`, 
                                administrador, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(administrador: AdministradorDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/administradores/${administrador.id}`, 
                                administrador, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/administradores/${id}`)
    }
}