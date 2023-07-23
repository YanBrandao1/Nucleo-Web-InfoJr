import userController from "@/controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch(req.method){ 
        case "GET":
            await userController.UserLogout(req, res);
            break;
        default:
            res.status(405).json({message: "Method not allowed"});
            break;
    }
}