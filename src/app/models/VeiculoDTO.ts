import { MotoristaDTO } from "./MotoristaDTO";

export interface VeiculoDTO {
    id: number; 
    placa: string;
    renavam: string; 
    modelo: string; 
    capacidade: string; 
    motorista: MotoristaDTO;
}