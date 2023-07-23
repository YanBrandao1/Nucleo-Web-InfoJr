import PedidoControllers from '../../Controllers/PedidoControllers';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method == "POST") {
        await  PedidoControllers.CreatePedido(request, response);
    }
    if (request.method == "GET") {
        await  PedidoControllers.GetPedidosAtivos(request, response);
    }
    if (request.method == "PUT") {
        await  PedidoControllers.ToggleStatusPedido(request, response);
    }
    
    
}
    
