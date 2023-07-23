"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ClienteDaPadaria from './components/Cliente/cliente'
import Painel from './components/Paineis/painel'
import { useState } from 'react';
import Modal from "./components/Modal/modal";
import axios from 'axios'
import { useEffect } from 'react';

interface Pedido {
  id : number;
  nome: string;
  totalDePaes: number;
}

export default function Home() {


  const axios = require('axios').default;
  const [showModal,setShowModal] = useState<boolean>(false);
  

  // useStates para os paineis 
  const [paes, setPaes] = useState<number>();
  const [entrada, setEntrada] = useState<number>();
  const [fila, setFila] = useState<Pedido[]>([]);
  const [nome, setNome] = useState<string>();
  const [qtdPaes, setQtdPaes] = useState<number>();
 

 //fetchs para recuperar os dados do banco
  const fetchFila = () => {
    axios.get('http://localhost:3000/api/page')
    .then(function (response : any) {
      const pedidoData = response.data.map((pedidoData: any) => ({
        id: pedidoData.id,
        nome: pedidoData.nome,
        totalDePaes: pedidoData.qtdPaes,
      }));
      setFila(pedidoData);
    });
  }

  const fetchPaes = () => {
    axios.get('http://localhost:3000/api/paineis/routes')
    .then(function (response : any) {
      setPaes(response.data as number);
    });

  }

  const fecthEntrada = () => {
    axios.get('http://localhost:3000/api/paineis/routes')
    .then(function (response : any) {
      setEntrada((response.data as number)*0.5);
    });
  }

  //userEffect para inicializar os dados
  useEffect(() => {
    fetchPaes();
    fecthEntrada();
    fetchFila();
  });

  const cadastraPedido = (nome:string, qtdPaes:number) => {
    const pedido ={
      nome : nome,
      qtdPaes : qtdPaes
    }
    axios.post('http://localhost:3000/api/page', pedido)
  };
  
  const handleSubmit = () =>{
    //função cadastro pedido
    cadastraPedido(nome as string, qtdPaes as number);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleOpenModal = () => {
    setShowModal(true);
  }
  const handleValuesChange =( input1: string, input2: number ) => {
    setNome(input1);
    setQtdPaes(input2);
  }

  return (
    <div>
      
      <main className={styles.main}>
        <div className={styles.topBox}>
          <div className={styles.logoBox}>
            <Image src="/img/logo.svg" alt='Logo La Padarie' width={90} height={60} className={styles.logo}></Image>
          </div>
            <div className={styles.painel1}>
            <Painel 
              descricao='Pessoas na fila'
              caminhoImagem='/img/icone1.svg'
              alt='Pequeno Icone'
              width={16}
              height={16}
              dado={fila.length}
              backgColor='#FFFFFF'
              />
            </div>
            <div className={styles.painel2}>
            <Painel 
              descricao='Pães vendidos'
              caminhoImagem='/img/icone2.svg'
              alt='Pequeno Icone'
              width={16}
              height={16}
              dado={paes as number}
              backgColor='#FFFFFF'
              />
            </div>
            <div id='brownPainel' className={styles.painel3}>
            <Painel
              descricao='Entrada'
              caminhoImagem='/img/icone3.svg'
              alt='Pequeno Icone'
              width={16}
              height={16}
              dado={entrada as number}
              backgColor='#5F3305'
              />
            </div>
           
        </div>
        <div className={styles.bottomBox}>
            <section className={styles.mainSection}>
              <div className={styles.addButtonBox}>
                  <button onClick={handleOpenModal} className={styles.addButton}>
                    + Adicionando clientes na fila
                  </button>
              </div>
              <div className={styles.requestsBox}>
                {fila !== undefined? fila.map((pedido) => { 
                  return(
                    <ClienteDaPadaria pedido={pedido}/>
                  )
                }) : <h1>Fila vazia</h1>}
              </div>
              <footer className={styles.footer}>
                  <p>Com 💛 por Yan e Ju</p>
                </footer>
            </section>
        </div>
            {showModal && (
              <div className={styles.modalBackground}>
                <section className={styles.modal}>
                  <Modal 
                    onChange={handleValuesChange}
                    onSubmit = {handleSubmit}
                    onClose = {handleCloseModal}
                  />
                </section>
              </div>
              )}
      </main>
    </div>
  )
}
