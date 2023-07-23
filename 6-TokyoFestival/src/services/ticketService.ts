import { PrismaClient, User, Ingresso, Tipo } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();
const qtdIngressos = 9; //Define a quantidade total de ingressos a serem vendidos
//Podemos definir constantes diferentes pra cada tipo de ingresso e incluir um switch dentro da funcao de verificacao de disponibilidade




class TicketService{

    public async verificaDisponibilidade(){
        let lastRecord = (await prisma.ingresso.findMany({
            orderBy: {
              idIngresso: 'desc',
            },
          })).shift()?.idIngresso;
        if((lastRecord as number) < qtdIngressos){
            return true;
        }
        return false;
    }

    public async verificaDisponibilidadeTipo(idTipo:number){
        const lastRecord = (await this.getTicketsByType(idTipo))?.length;
        if((lastRecord as number) < qtdIngressos){ //editar constante qtdIngressos
            return true;
        }
        return false;
    }

    public async createTicket(ticket:{idTipo:number, idUser:number}): Promise<Ingresso> {
        const newTicket = await prisma.ingresso.create({
            data: {
                idTipo: ticket.idTipo,
                idUser: ticket.idUser
            }}
        );
        return newTicket;
    }

    public async getTicketById(id: number): Promise<Ingresso | null> {
        const ticket = await prisma.ingresso.findUnique({
            where: {
                idIngresso: id
            }
        });
        return ticket;
    }

    public async getTicketsByUser(id: number): Promise<Ingresso[] | null> {
        const tickets = await prisma.ingresso.findMany({
            where: {
                idUser: id
            }
        });
        return tickets;
    }

    public async getTicketsByType(id: number): Promise<Ingresso[] | null> {
        const tickets = await prisma.ingresso.findMany({
            where: {
                idTipo: id
            }
        });
        return tickets;
    }

    public async getTipos(): Promise<Tipo[] | null> {
        const tipos = await prisma.tipo.findMany();
        return tipos;
    }

}

export default new TicketService();