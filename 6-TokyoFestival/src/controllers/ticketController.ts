import {PrismaClient} from '@prisma/client';
import ticketService from "@/services/ticketService";
import { NextApiRequest, NextApiResponse } from "next";
import { Ingresso } from "@prisma/client";

const prisma = new PrismaClient();

export default {

    async sellTicket(req: NextApiRequest, res: NextApiResponse){
        try{
            const ingresso = req.body as Ingresso;
            //verifica a disponibilidade
            if(!(await ticketService.verificaDisponibilidadeTipo(ingresso.idTipo))){
                return res.status(400).json({message: "Ingressos esgotados"});
            }

            //vende o ingresso
            const ticket = await ticketService.createTicket(req.body);
            return res.status(200).json(ticket);
        }catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
        }
    },
    async getTipos(req: NextApiRequest, res: NextApiResponse){
        try{
            const tipos = await ticketService.getTipos();
            return res.status(200).json(tipos);
        }catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
        }
    }
    
}