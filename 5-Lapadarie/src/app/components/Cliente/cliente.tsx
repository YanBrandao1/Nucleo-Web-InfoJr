import React from "react";
import styles from "./cliente.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface Pedido {
    id : number;
    nome: string;
    totalDePaes: number;
  }
interface propsClientesType{
    pedido: Pedido;
}

const ClienteDaPadaria = ({pedido}: propsClientesType) => {
    const axios = require('axios').default;

    const removeFromQueue = (id:number) => {
       axios.put('http://localhost:3000/api/page?id='+id as string);
    };

    return(
        <div className={styles.clienteComponente}>
            <h1>{pedido.nome as string}</h1>
            <div className={styles.flexboxProps}>
                <div className={styles.dataContainer}>
                    <h2>Total de pães: {pedido.totalDePaes as number} pães</h2>
                    <h2>Total a pagar: R$ {(pedido.totalDePaes as number)*0.5}</h2>
                </div>
                <div className={styles.imageContainer}>
                    <Image onClick={()=>{removeFromQueue(pedido.id)}} src="/img/lixeira.svg" alt="Icone da Lixeira" width={15} height={15} className={styles.trashImg}/>
                </div>
            </div>
        </div>
    )
}

export default ClienteDaPadaria;