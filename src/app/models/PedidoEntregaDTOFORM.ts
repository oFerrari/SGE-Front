 // Certifique-se de importar o enum corretamente

import { StatusPedido } from "./PedidoEntregaDTO";

export interface PedidoEntregaDTOFORM {
    id?: number; // Adicione o ponto de interrogação para indicar que é opcional
    idCliente: number;
    mercadoria: string;
    origem: string;
    destino: string;
    emissao: string; // Ajuste para o tipo correto, dependendo do formato no backend
    dataEntrega: string; // Ajuste para o tipo correto, dependendo do formato no backend
    statusPedido: StatusPedido;
    idVeiculo: number;
}
