import { IngressosProps } from "@/interfaces/interfaces";
import styles from './tipoIngresso.module.css';
import axios from 'axios';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

function TipoIngresso(props:IngressosProps){
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<User>();
    const [inicio, setInicio] = useState<string>("");
    const [fim, setFim] = useState<string>("");
    const vendeIngresso = async () => {
        try{
            try{
                const User = await axios.get("http://localhost:3000/api/user");
                setUserInfo(User.data)
            }catch{
                router.push("/login");
            }
            if (userInfo){
                const ingresso = await axios.post('http://localhost:3000/api/ticket', {
                idTipo: props.TipoIngresso.idTipo,
                idUser: userInfo.idUser,
                });
                return ingresso
            }
            
            
        }catch(error){
            if(error instanceof Error){
                console.log(error.message);
            }
        
        }
    }
    
    function slicestring(){
        let entrada = props.TipoIngresso.descricao.toUpperCase()
        const tamanho = entrada.length;
        let new_inicio = entrada.slice(0,2);
        let new_fim = entrada.slice(-2);

        if (tamanho < 6){
            for(let i = 1; new_inicio.length + new_fim.length < tamanho*2; i++){
                
                if( i%2 == 1){
                    new_inicio = entrada.slice(0, 2+i );
                }else{
                    new_fim = entrada.slice(-2-i);
                }

                if( new_inicio.length + new_fim.length + tamanho == 10 ){
                    break;
                }
            }
        }
        setInicio(new_inicio);
        setFim(new_fim);
    }
    useEffect( ()=>{
        slicestring()
    }, [])
    
    return(
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <div className={styles.Desktop}>
                {props.TipoIngresso.descricao? <h2> {props.TipoIngresso.descricao.toUpperCase()} <span>{props.TipoIngresso.descricao.toUpperCase()} </span>{props.TipoIngresso.descricao.toUpperCase()}</h2>: "Carregando..."}
                </div>
                {(
                    <div className={styles.Mobile}>
                    {props.TipoIngresso.descricao? <h2> {fim} <span>{props.TipoIngresso.descricao.toUpperCase()} </span>{inicio}</h2>: "Carregando..."}
                    </div>
                )}
                
                <div className={styles.Content}>
                    <div className={styles.Description}>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <p className={styles.mainContent}>_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso_Acesso a isso</p>
                    </div>
                    <div className={styles.Price}>
                        <h2>R${props.TipoIngresso.preco.toFixed(2)}</h2>
                        <p>Ou 10x de  <strong> R${(props.TipoIngresso.preco/10).toFixed(2)}</strong></p>
                    </div>
                </div>      
            </div>
            <button className={styles.Button} onClick={vendeIngresso}>COMPRAR INGRESSO {props.TipoIngresso.descricao? props.TipoIngresso.descricao.toUpperCase(): "Carregando()"}</button>
        </div>
    );
}
export default TipoIngresso;
