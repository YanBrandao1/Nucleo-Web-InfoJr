import React from "react";

import styles from './footer.module.css';


function Footer(){
    return (
    <>
    <footer className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.footerContainer}>
                <h3>Festival</h3>
                <ul>
                    <li>
                        <a href="#">Parceiros</a>
                    </li>
                    <li>
                        <a href="#">Imprensa</a>
                    </li>
                    <li>
                        <a href="#">Sobre nós</a>
                    </li>
                </ul>
            </div>

            <div className={styles.footerContainer}>
                <h3>Ajuda</h3>
                <ul>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                    <li>
                        <a href="#">Informações</a>
                    </li>
                </ul>
            </div>

            <div className={styles.footerContainer}>
                <h3>Social</h3>
                <ul>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Tiktok</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
       <div className={styles.footerBottom}>
            <p>© Meltdown Fusion Tokyo</p>
            <p>Site desenvolvido pela <strong>InfoJr</strong></p>
       </div>
    </footer>
    </>)
}


export default Footer;