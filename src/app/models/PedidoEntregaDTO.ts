import { ClienteDTO } from "./ClienteDTO";
import { VeiculoDTO } from "./VeiculoDTO";

export enum StatusPedido {
    PENDENTE = 'PENDENTE',
    EM_TRANSITO = 'EM_TRANSITO',
    ATRASADO = 'ATRASADO',
    CONCLUIDO = 'CONCLUIDO',
}

export interface PedidoEntregaDTO {
    id: number;
    cliente: ClienteDTO;
    nomeCliente: string;
    mercadoria: string;
    origem: string;
    destino: string;
    emissao: Date;
    dataEntrega: Date;
    statusPedido: StatusPedido;
    nomeVeiculo: string
    veiculo: VeiculoDTO;
}