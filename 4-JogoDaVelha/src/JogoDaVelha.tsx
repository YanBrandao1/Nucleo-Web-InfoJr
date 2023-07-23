import React, { useState } from 'react';
import './JogoDaVelha.css';

export default function Game(){

    // Criacao das variaveis necessarias
    const simbolx = 'X';
    const simbolball = 'O';
    const [output,setOutput] = useState(['','','','','','','','','']);
    const [contador,setContador] = useState(2);
    const [win,setWin] = useState(false);
    const [init,setInit] = useState(false);
    const [initialSimbol,setInitSimbol] = useState('');
    const[isClickedInit,setInitialClick] = useState(false);
    const [isClicked,setClick] = useState([false,false,false,false,false,false,false,false,false]);
    const [cpuVersion,setCpuVersion] = useState('');
    let randomNumber: number;

    function generateRandomNumber(){
        const randomNum = Math.floor(Math.random() * 9)
        return randomNum;
    }

    // Funcao que seta o ganhador da partida
    function setWinner(){
        if((output[0] != '') && (init == true) && (output[0] == output[3]) && (output[0] == output[6])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[0]+ '" venceu !!!');
            return; 
        }
        else if((output[0] != '') && (init == true) && (output[0] == output[1]) && (output[0] == output[2])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[0]+ '" venceu !!!');
            return; 
        }
        else if((output[0] != '') && (init == true) && (output[0] == output[4]) && (output[0] == output[8])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[0]+ '" venceu !!!');
            return; 
        }
        else if((output[1] != '') && (init == true) && (output[1] == output[4]) && (output[1] == output[7])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[1]+ '" venceu !!!');
            return; 
        }
        else if((output[2] != '') && (init == true) && (output[2] == output[5]) && (output[2] == output[8])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[2]+ '" venceu !!!');
            return; 
        }
        else if((output[2] != '') && (init == true) && (output[2] == output[4]) && (output[2] == output[6])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[2]+ '" venceu !!!');
            return; 
        }
        else if((output[3] != '') && (init == true) && (output[3] == output[4]) && (output[3] == output[5])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[3]+ '" venceu !!!');
            return; 
        }
        else if((output[6] != '') && (init == true) && (output[6] == output[7]) && (output[6] == output[8])){
            setWin(true);
            alert('Parabéns, o jogador com o símbolo "' + output[6]+ '" venceu !!!');
            return; 
        }
        setInit(true);
        return;
    }

    // Funcao que seta a escolha do simbolo inicial: 'X' ou 'O'
    function setInitialSimbol(event: {target: {value: string;}; }) {
        if (!isClickedInit){
            setInitialClick(true);
            if (event.target.value == simbolx){
                setInitSimbol(simbolx);
                return;
            }
            else if(event.target.value == simbolball){
                setInitSimbol(simbolball);
                return;
            }
        }  
    }

    // Funcao que seta os cliques em cada botao do jogo
    const setNewClick = (index: number, newValue: boolean) => {
        setClick (oldArray => {
            const newArray = oldArray.map((element, i) => {
                if (i === index) {
                    return newValue;
                }
                return element;
            });
            return newArray;
        });
    };

    // Funcao que seta a saida : 'X' ou 'O'
    const setNewOutput = (index: number, newValue:string) => {
        setOutput (oldArray => {
            const newArray = oldArray.map((element, i) => {
                if (i === index) {
                    return newValue;
                }
                return element;
            });
            return newArray;
        });
    };


    // Funcao que administra o clique do usuario em algum botao do jogo e toma alguma decisao a partir disso
    function setButtonValue(e: { target: { value: number; }; }){
        setWinner();
        if (win){
            return;
        }
        else if(e.target.value == 0){
            if(!isClicked[0]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(0,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(0,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(0,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(0,simbolx);
                    }
                }
                setNewClick(0,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
        }
        else if(e.target.value == 1){
            if(!isClicked[1]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(1,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(1,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(1,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(1,simbolx);
                    }
                }
                setNewClick(1,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
        
    }
        else if(e.target.value == 2){
            if(!isClicked[2]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(2,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(2,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(2,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(2,simbolx);
                    }
                }
                setNewClick(2,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
            return;
            }
            return;
        
    }
        else if(e.target.value == 3){
            if(!isClicked[3]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(3,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(3,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(3,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(3,simbolx);
                    }
                }
                setNewClick(3,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
        else if(e.target.value == 4){
            if(!isClicked[4]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(4,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(4,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(4,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(4,simbolx);
                    }
                }
                setNewClick(4,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
        else if(e.target.value == 5){
            if(!isClicked[5]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(5,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(5,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(5,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(5,simbolx);
                    }
                }
                setNewClick(5,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
        else if(e.target.value == 6){
            if(!isClicked[6]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(6,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(6,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(6,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(6,simbolx);
                    }
                }
                setNewClick(6,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
        else if(e.target.value == 7){
            if(!isClicked[7]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(7,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(7,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(7,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(7,simbolx);
                    }
                }
                setNewClick(7,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
        else if(e.target.value == 8){
            if(!isClicked[8]){
                if (initialSimbol == simbolx || initialSimbol == ''){
                    if(contador%2 == 0){
                        setNewOutput(8,simbolx);
                        setInitialClick(true);
                    }
                    else if(contador%2 == 1){
                        setNewOutput(8,simbolball);
                    }
                    
                }
                else if (initialSimbol == simbolball){
                    if(contador%2 == 0){
                        setNewOutput(8,simbolball);
                        setInitialClick(true);
                    }
                    if(contador%2 == 1){
                        setNewOutput(8,simbolx);
                    }
                }
                setNewClick(8,true);
                setContador(contador+1);
                setWinner();
                if (cpuVersion == 'y' && contador < 10){ // IMPLEMENTACAO DO CLIQUE DA MAQUINA
                    randomNumber = generateRandomNumber();
                    while (isClicked[randomNumber] == true || randomNumber == e.target.value){
                        randomNumber = generateRandomNumber();       
                    }
                    if (initialSimbol == simbolx || initialSimbol == ''){
                        setNewOutput(randomNumber,simbolball);
                        setNewClick(randomNumber,true);
                    }
                    else if(initialSimbol == simbolball){
                        setNewOutput(randomNumber,simbolx);
                        setNewClick(randomNumber,true);
                    }
                    setContador(contador+2);
                    setWinner();
                }
                return;
            }
            return;
    }
    }

    // Retorno da funcao principal que gera a renderizacao dos elementos na tela
    return (
    
        <div>
            <main id='game-page'>
                <section>
                    <h1 className='title' id='main-title'>Jogo da Velha</h1>
                    <div className='count-separator'>
                        <div className='select-div'>
                            <div>
                                <h3>Jogar com</h3>
                                <button onClick={setInitialSimbol} className='select-button' value={simbolx}>X</button>
                            </div>
                            <div>
                                <h3>Jogar com</h3>
                                <button onClick={setInitialSimbol} className='select-button' value={simbolball}>O</button>
                            </div>
                        </div>
                        <div className='cpu-select-box'>
                            <h3>Jogar contra o computador?</h3>
                            <select value={cpuVersion} onChange={(event) => setCpuVersion(event.target.value)}>
                                    <option value={'n'}>Não</option>
                                    <option value={'y'}>Sim</option>
                            </select>
                        </div>
                    </div>
                    <div className = 'flexboxes'> 
                        <button onClick ={setButtonValue} value = {0}>{output[0]}</button>
                        <button onClick ={setButtonValue} value = {1}>{output[1]}</button>
                        <button onClick ={setButtonValue} value = {2}>{output[2]}</button> 
                    </div>
                    <div className = 'flexboxes'> 
                        <button onClick ={setButtonValue} value = {3}>{output[3]}</button>
                        <button onClick ={setButtonValue} value = {4}>{output[4]}</button>
                        <button onClick ={setButtonValue} value = {5}>{output[5]}</button> 
                    </div>
                    <div className = 'flexboxes'> 
                        <button onClick ={setButtonValue} value = {6}>{output[6]}</button>
                        <button onClick ={setButtonValue} value = {7}>{output[7]}</button>
                        <button onClick ={setButtonValue} value = {8}>{output[8]}</button> 
                    </div>
                </section>
                
            </main>
        </div>
    );
}