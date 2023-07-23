import {PrismaClient} from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import PedidoService from '../services/PedidoService';

const prisma = new PrismaClient();

export default{

    async CreatePedido(req:NextApiRequest, res:NextApiResponse){
        try{
            const {nome, qtdPaes} = req.body;
            const pedidoService = new PedidoService();
            const pedido = await pedidoService.CreatePedido(nome, qtdPaes);
            
             res.status(201).json(pedido);
        }catch(error){
            
            res.status(500).json({message: "Erro ao cadastrar pedido. "});

        }
    },

    async GetPedidosAtivos(req:NextApiRequest, res:NextApiResponse){
        try{
            const pedidoService = new PedidoService();
            const pedidos = await pedidoService.GetPedidosAtivos();
            res.status(200).json(pedidos);
        }catch(error){
            const errorMessage = (error as Error).message;
            res.status(500).json({message: "Erro ao buscar pedidos. "+errorMessage});
        }
    },

    async ToggleStatusPedido(req:NextApiRequest, res:NextApiResponse){
        try{
            const {id} = req.query as {id:string};
            const pedidoService = new PedidoService();
            const pedido = await pedidoService.ToggleStatusPedido(parseInt(id));
            res.status(200).json(pedido);
        }catch(error){
            const errorMessage = (error as Error).message;
            res.status(500).json({message: "Erro ao atualizar status do pedido. "+errorMessage});
        }
    },

    async GetPaesVendidos(req:NextApiRequest, res:NextApiResponse){
        try{
            const pedidoService = new PedidoService();
            const paes = await pedidoService.GetPaesVendidos();
            res.status(200).json(paes);
        }catch{
            res.status(500).json({message: "Erro ao buscar quantidade de paes vendidos. "});
        }
    }


    
}