import {PrismaClient} from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import UserService from '@/services/userService';
import {hash} from 'bcrypt';
import {compare} from 'bcrypt';
import { sign } from "jsonwebtoken";
import { secret } from "../../api/secret";
import cookie from 'cookie';
import userService from '@/services/userService';

const prisma = new PrismaClient();

export default {  

    async CreateUser(req: NextApiRequest, res: NextApiResponse){
        try {
            const { name, age,email, password } = req.body;
            
            const existingEmail = await UserService.checkEmail(email);
      
            if (existingEmail) {
              res.status(400).json({ error: "That's not a unique email" });
              return;
            }
            console.log("email n existente");
            const hashedPassword: string = await new Promise((resolve, reject) => {
              hash(password, 10, function(err, hash) {
                if (err) reject(err);
                resolve(hash);
                
              });
            });

            const newUser = await prisma.user.create({
              data: {
                name,
                age: parseInt(age),
                email,
                password: hashedPassword,
              },
            });
      
            res.status(201).json({message: "OK"});
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    },

    async UserLogin(req: NextApiRequest, res: NextApiResponse){

        try{
            //verifica a existencia do usuário
            if(!(await UserService.checkEmail(req.body.email))){
                return res.status(400).json({message: "Email não cadastrado"});
            }

            //login
            const user = await UserService.getUserByEmail(req.body.email);
            
            if (user){
                compare(req.body.password, user.password,function(err, result){
                    if( !err && result){
        
                        const claims = {idUser: user.idUser, name: user.name, age: user.age, email: user.email ,ingresso: user.ingresso }    
                        const jwt = sign(claims, secret, {expiresIn: '1h'});
        
                        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== 'development',
                            sameSite: "strict",
                            maxAge: 3600,
                            path: "/"
                        }) )
                        res.json({message: "Bem vindo de volta"})
        
                    }else{
                        res.json({message: "Algo deu errado",})
                    }
                })
            }
            
        }
        catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
              
        }
    },
    
    async GetUser(idUser: string, res: NextApiResponse) {
      try {
        const user = await userService.getUserById(parseInt(idUser));
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Unknown error" });
      }
    },
    
    async UserLogout(req: NextApiRequest, res: NextApiResponse){

      res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
        expires: new Date(0),
        path: '/', 
      }));

      res.status(200).json({ message: 'Logout successful' });
    }

}