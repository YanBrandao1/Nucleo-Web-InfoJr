import userController from "@/controllers/userController";
import { NextApiRequest, NextApiResponse } from "next";
import authenticated from "./authenticated";
import { secret } from "../../../api/secret";
import { verify } from "jsonwebtoken";

export default authenticated(async function handler(req: NextApiRequest, res: NextApiResponse){
    switch(req.method){
          case "GET":
            const decoded = verify(req.cookies.auth, secret) as { idUser: string };

            const { idUser } = decoded;
              await userController.GetUser(idUser, res);
              break;
        default:
            res.status(405).json({message: "Method not allowed"});
            break;
    }
})