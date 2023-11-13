import { VeiculoDTO } from "./VeiculoDTO";

export interface MotoristaDTO {
    id: number; 
    nome: string;
    cpf: string; 
    cnh: string; 
    endereco: string; 
    telefone: string; 
    email: string;
    veiculos: VeiculoDTO[];
}