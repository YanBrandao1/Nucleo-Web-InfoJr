export interface User{
    idUser: number,
    name: string,
    age: number,
    email: string
    ingresso: Ingresso[]
}

export interface Ingresso{
    idIngresso: number,
    idUser: number,
    idTipo: number
}

export interface iTipoIngresso{
    idTipo: number,
    descricao: string,
    preco: number
}

export interface IngressosProps{
    TipoIngresso: iTipoIngresso
}

export interface CardProps {
    caminho: string,
    nome: string,
    tipo:boolean,
    largura:number,
    altura:number
}

export interface HomeIngressoProps {
    tipo:string,
    preco:number
}