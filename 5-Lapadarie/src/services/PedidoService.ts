import { PrismaClient, Pedido } from "@prisma/client";
import {Prisma} from '@prisma/client';

const prisma = new PrismaClient();

class PedidoService {


    public async CreatePedido(nome:string, qtdPaes:number) : Promise<Pedido>{
        const pedido = await prisma.pedido.create({
           data:{
                nome: nome,
                qtdPaes: qtdPaes
           }
        });  
        return pedido;
    }

    public async GetPedidosAtivos() : Promise<Pedido[]>{
        const pedidos = await prisma.pedido.findMany({
            where:{
                foiAtendido: false
            }
        });
        return pedidos;
    }

    public async ToggleStatusPedido(id:number){
        const pedido = await prisma.pedido.update({
            where:{
                id: id
            },
            data:{
                foiAtendido: true
            }
        });
    }

    public async GetPaesVendidos() : Promise<number>{
        const pedidos = await prisma.pedido.findMany({
            where:{
                foiAtendido: true
            }
        });
        let paes = 0;
        pedidos.forEach(pedido => {
            paes += pedido.qtdPaes;
        });
        return paes;
    }




}
export default PedidoService;