import React from "react";
import NextImage from 'next/image';
import styles from "./painel.module.css";
import iconee from "../../../../public/img/Icone1.svg"
import Image from "next/image";

interface propsPainelType{
    
    descricao:string;
    caminhoImagem: string;
    alt: string;
    width: number;
    height: number;
    dado:number;
    backgColor:string;
}

const Painel = ({descricao,caminhoImagem,alt,width,height,dado,backgColor}: propsPainelType) => {
    return (
        <div style={{backgroundColor: backgColor}} className={styles.painel}>
            <div className={styles.flexboxProps}>
                <h1>{descricao}</h1>
                <Image src={caminhoImagem} alt={alt} width={width} height={height} />
            </div>
            <h2>{dado}</h2>
        </div>
    );
}

export default Painel;