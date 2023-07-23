import PedidoControllers from '../../../Controllers/PedidoControllers';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method == "GET") {
        await  PedidoControllers.GetPaesVendidos(request, response);
    }
    else{
        response.status(405).json({message: "Método não permitido. "});
    }
    
    
}