import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import styles from '@/styles/Login.module.css'
import img from '../../public/img/loginImg.svg'
import logo from '../../public/img/logoLogin.svg'
import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import NavbarResponsivo from '@/components/navbarResponsivo/NavbarResponsivo'

const inter = Inter({ subsets: ['latin'] })


export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    
    async function handleSubmit(){
        const email = emailRef.current?.value;
        const password = passRef.current?.value;
        const resp = await axios.post("http://localhost:3000/api/login",{
            email: email,
            password: password
        })

        if (resp.statusText="OK") {
            router.push("/");
          }
    }
    async function handleLogout(){
        const resp = await axios.get("http://localhost:3000/api/logout");
    }

    return(
    <>  
        <div className={styles.navbarDesktop}><Navbar/></div>
        {( // RESPONSIVO
            <div className={styles.navbarResponsivo}><NavbarResponsivo largura={700} /></div> 
        )}
        <div className={styles.Wrapper}>
            
            <div className={styles.Container}>
                <div className={styles.imgs}>
                <Image src={img} alt="Imagem" className={styles.Img} />
                <Image src={logo} alt="Imagem" className={styles.imgLogo} />
                </div>
                {(
                    // RESPONSIVO
                    <div className={styles.imgResponsivoBox}>
                         <Image src='../img/imgLoginResponsivo.svg' width={700} height={307} alt='Imagem de fundo'/>
                         <Image src='../img/logoLogin.svg' alt="Imagem" width={200} height={200} className={styles.imgLogo} />
                         </div>
                )}
                <div className={styles.form}>
                    <form>
                    <h3>FAÇA <span>LOGIN</span></h3>
                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" placeholder=" Seunome@email.com" ref={emailRef}></input>
                        <div className={styles.doubleInput}>
                            <div className={styles.Senha}>
                                <label className={styles.labelSenha}>Senha</label>
                                <input className={styles.inputSenha} type="password" placeholder=" Mínimo de 8 caracteres" ref={passRef}></input>
                            </div>
                        </div>
                        <div className={styles.forgetPassword}>
                            <Link legacyBehavior href='/cadastro'><a>Esqueceu sua senha ?</a></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.singUpWrapper}>
                    <button type='submit' className={styles.submitButton} onClick={handleSubmit}> ENTRAR </button>
                    <p className={styles.singUp}>Não tem uma conta? <Link href="/cadastro">Crie uma</Link></p>

            </div>
        </div>
    <Footer/>
    </>
    )
}
