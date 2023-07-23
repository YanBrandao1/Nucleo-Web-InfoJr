import ticketController from "@/controllers/ticketController";
import { NextApiRequest, NextApiResponse } from "next";
import authenticated from "./authenticated";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch(req.method){
        case "GET":
            await ticketController.getTipos(req, res);
            break;
        default:
            res.status(405).json({message: "Method not allowed"});
            break;
    }
}