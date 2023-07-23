import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import styles from '../styles/Atracoes.module.css';
import PhotoCard from "@/components/photoCard/photoCard";
import NavbarResponsivo from "@/components/NavbarResponsivo/NavbarResponsivo";
import Image from "next/image";


export default function Atracoes() {

    const repeatText = (text: string) => {
        let screenWidth;
        if (typeof window !== "undefined") {
          screenWidth = screen.width;
        }
        let textWidth = text.length * 8;
        let repetitions = 10;
      
        let repeatedText = Array(repetitions).fill(text);
      
        return repeatedText;
      };
   
    return(
        <>
            <div className={styles.navbarDesktop}><Navbar/></div>
            {( // RESPONSIVO
            <div className={styles.navbarResponsivo}><NavbarResponsivo largura={700} /></div> 
            )}
            <div className={styles.sectionTitle}>
                
         {
            repeatText('ATRAÇÕES ').map((text, index) => {
              if(index==1){
                return <span className={styles.span}>{text}</span>
              }
              else if(index ==0){
                let parts = text.split("S");
                return <h1>{parts[1]}</h1>
              }
              else{
                return <h1>{text}</h1>
              }
            })
          }
          </div>

            <div className='background-container'>
                <section className={styles.mainSection}>
                    <div className={styles.flexbox}>
                        <div className={styles.box1}>
                            <Image className={styles.star} src='img/star1.svg' alt='Imagem ilustrativa de uma estrelinha' width={100} height={100}/>
                            <PhotoCard largura={400} altura={400} nome='MARCUS RHIEL' caminho='/img/cardImage1.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box2}>
                            <Image className={styles.star} src='img/star1.svg' alt='Imagem ilustrativa de uma estrelinha' width={100} height={100}/>
                            <PhotoCard largura={400} altura={400} nome='DDRAYNA STANTON' caminho='/img/cardImage2.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac <br/><br/>aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box3}>
                            <Image className={styles.star} src='img/star1.svg' alt='Imagem ilustrativa de uma estrelinha' width={100} height={100}/>
                            <PhotoCard largura={400} altura={400} nome='RAYNA STANTON' caminho='/img/cardImage3.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                    </div>
                    <div className={styles.flexbox}>
                        <div className={styles.box1}>
                            <PhotoCard largura={400} altura={400} nome='MARCUS RHIEL' caminho='/img/cardImage1.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box2}>
                            <PhotoCard largura={400} altura={400} nome='DRAYNA STANTON' caminho='/img/cardImage2.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box3}>
                            <PhotoCard largura={400} altura={400} nome='RAYNA STANTON' caminho='/img/cardImage3.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                    </div>
                    <div className={styles.flexbox}>
                        <div className={styles.box1}>
                            <PhotoCard largura={400} altura={400} nome='MARCUS RHIEL' caminho='/img/cardImage1.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box2}>
                            <PhotoCard largura={400} altura={400} nome='DULCE AMINOFF' caminho='/img/cardImage2.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                        <div className={styles.box3}>
                            <PhotoCard largura={400} altura={400} nome='RAYNA STANTON' caminho='/img/cardImage3.svg' tipo={true}/>
                            <p>_Jorem ipsum dolor sit amet<br/>, consectetur adipiscing elit. Nunc<br/> vulputate libero et velit interdum, ac<br/> aliquet odio mattis.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}