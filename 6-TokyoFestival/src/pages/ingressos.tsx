import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Ingressos.module.css";
import TipoIngresso from "@/components/tipoIngresso/tipoIngresso";
import Footer from "@/components/footer/footer";
import { iTipoIngresso, User } from "@/interfaces/interfaces";
import { Tipo } from "@prisma/client";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarResponsivo from "@/components/navbarResponsivo/NavbarResponsivo";

export default function Ingressos() {
  const [tipo, setTipo] = useState<iTipoIngresso[]>([]);

  const fetchTipoIngresso = async () => {
    const response = await axios.get('http://localhost:3000/api/tickettypes');
    const tipos = response.data.map((tipo: Tipo) => {
      return {
        idTipo: tipo.idTipo,
        descricao: tipo.nome,
        preco: tipo.preco,
      } as iTipoIngresso;
    });
    setTipo(tipos);
  };

  useEffect(() => {
    fetchTipoIngresso();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.navbarDesktop}><Navbar/></div>
        {( // RESPONSIVO
            <div className={styles.navbarResponsivo}><NavbarResponsivo largura={700} /></div> 
        )}


      <section className={styles.cards}>
        {tipo.map((tipo) => {
          return <TipoIngresso TipoIngresso={tipo as iTipoIngresso}  />;
        })}
      </section>
      <Footer />
    </div>
  );
}
