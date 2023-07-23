import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import styles from '@/styles/Cadastro.module.css'
import img from '../../public/img/cadastroImg.svg'
import logo from '../../public/img/logoCadastro.svg'
import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import NavbarResponsivo from '@/components/NavbarResponsivo/NavbarResponsivo'

const inter = Inter({ subsets: ['latin'] })

export default function Cadastro() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    
    async function handleSubmit(){
        const email    =  emailRef.current?.value;
        const password =  passRef.current?.value;
        const age      =  ageRef.current?.value;
        const name     =  nameRef.current?.value;

        const resp = await axios.post("http://localhost:3000/api/signup",{
        email   : email,
        password: password,
        age     : age,
        name    : name
        });

    if (resp.statusText="OK") {
        const resp = await axios.post("http://localhost:3000/api/login",{
        email: email,
        password: password
        });
        router.push("/");
        }

    
        
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
                         <Image src='/img/imgCadastroResponsivo.svg' width={700} height={307} alt='Imagem de fundo'/>
                         <Image src='/img/logoCadastro.svg' alt="Imagem" width={200} height={200} className={styles.imgLogo} />
                    </div>
                )}
                <div className={styles.form}>
                    <form>
                    <h3>CRIE <span>UMA CONTA</span></h3>
                        <label className={styles.label}>Nome</label>
                        <input className={styles.input} type="text" placeholder=" Seu nome completo..." ref={nameRef} ></input>
                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" placeholder=" Seunome@email.com" ref={emailRef}></input>
                        <div className={styles.doubleInput}>
                            <div className={styles.Idade}>
                                <label className={styles.labelIdade}>Idade</label>
                                <input className={styles.inputIdade} type="number" placeholder=" Sua idade" ref={ageRef}></input>
                            </div>
                            <div className={styles.Senha}>
                                <label className={styles.labelSenha}>Senha</label>
                                <input className={styles.inputSenha} type="password" placeholder=" Mínimo de 8 caracteres" ref={passRef}></input>

                            </div>
                        </div>
                        <div className={styles.privacyPolicy}>
                            <input type="checkbox" name="option" id="option" value="value"></input><label htmlFor="option" className={styles.politicaPrivacidade} >Concordo com todas as políticas de privacidade.</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.singUpWrapper}>
                    <button type='submit' className={styles.submitButton}> CRIAR CONTA </button>
                    <div className={styles.singUpBox}>
                        <p className={styles.singUp}> Já tem uma conta? <Link href="/login">Faça login</Link></p>
                    </div>

                </div>
        </div>
    <Footer/>
    </>
    )
}

