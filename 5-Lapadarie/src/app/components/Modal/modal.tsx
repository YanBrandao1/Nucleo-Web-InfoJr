import React from "react";
import styles from "./modal.module.css";
import { useState } from "react";
import { useEffect } from "react";



interface propsModalType{
    onSubmit: () => void;
    onClose: () => void;
    onChange: (input1:string,input2:number) => void;
}

const Modal = ({ onClose,onSubmit, onChange }: propsModalType) => {
    const [input1, setInput1] = React.useState<string>();
    const [input2, setInput2] = React.useState<number>();


    useEffect(() => {
        onChange(input1 as string,input2 as number);
    }, [input1,input2]);

    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
    }

    return(
        <form className={styles.modal} onSubmit={handleSubmit}>
            <div className={styles.titleBox}>
                <h1>Adicionar pessoas a fila</h1>
            </div> 
            <div className={styles.flexboxInputs}>
                <input type="text" name="inputText" id="inputText"  onChange={e => setInput1(e.target.value)} placeholder="Nome completo do cliente"/>
                <input type="number" name="inputNumber" id="inputNumber" onChange={e => setInput2(Number(e.target.value))} placeholder="Total de pães"/>
            </div>
            <div className={styles.buttonsFlexbox}>
                <button className={styles.submitButton} type="submit">Enviar</button>
                <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}   

export default Modal;