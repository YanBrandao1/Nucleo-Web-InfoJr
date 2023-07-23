import React, { useState } from 'react';
import './Calculadora.css';


export default function Calculadora() {
    const [number,setNumber] = useState(0);
    const[oldNumber,setOldNumber] = useState(0);
    const[operator,setOperator] = useState();
    let aux;

    function inputNumber(e){
        aux = String(number);
        if(aux.length > 11){
            setNumber(0);
            console.log('ENTREI NA CONDICIONAL');
        }
        else if(number === 0){
            setNumber(e.target.value);
        }
        else{
            setNumber(number + e.target.value);
        }
        aux = e.target.value;
    }

    function removealgarism(){
        aux = String(number);
        if(aux.length === 1){
            setNumber(0);
        }
        else{
            aux = aux.replace(aux[aux.length-1],'');
            setNumber(aux);
        }
    }

    function changeSignal(){
        if (number>0){
            setNumber(-number);
        }
        else{
            setNumber(number*(-1));
        }
    }

    function clearNumber(){
        setNumber(0);
    }

    function setOperatorFunction(e){
        setOperator(e.target.value);
        setOldNumber(number);
        setNumber(0);
    }

    function calculate(e){
        let operate;

        if(operator === '/'){
            operate = oldNumber/number;
            aux = String(operate);
            if(aux.length > 11){
                operate = operate.toFixed(2);
            }
            setNumber(operate);
        }
        else if(operator === '*'){
            setNumber(oldNumber*number);
        }
        else if(operator === '-'){
            setNumber(oldNumber-number);
        }
        else if(operator ==='+'){
            setNumber(parseFloat(oldNumber)+parseFloat(number));
        }
    }

    return(
        <div className='backg'>
            <div className="content-box">
                <h1>Calculadora</h1>
                <h3 className='result'>{number}</h3>
                <div>
                    <button onClick={clearNumber}>AC</button>
                    <button onClick={removealgarism}>&#8592;</button>
                    <button onClick={changeSignal}>+/-</button>
                    <button onClick={setOperatorFunction} value={'*'}>X</button>
                    </div>
                <div>
                    <button onClick={inputNumber} value={7}>7</button>
                    <button onClick={inputNumber} value={8}>8</button>
                    <button onClick={inputNumber} value={9}>9</button>
                    <button onClick={setOperatorFunction} value={'/'}>/</button>
                    
                </div>
                <div>
                    <button onClick={inputNumber} value={4}>4</button>
                    <button onClick={inputNumber} value={5}>5</button>
                    <button onClick={inputNumber} value={6}>6</button>
                    <button onClick={setOperatorFunction} value={'+'}>+</button>
                </div>
                <div>
                    <button onClick={inputNumber} value={1}>1</button>
                    <button onClick={inputNumber} value={2}>2</button>
                    <button onClick={inputNumber} value={3}>3</button>
                    <button onClick={setOperatorFunction} value={'-'}>-</button>
                </div>
                <div>
                    <button className='button-zero' onClick={inputNumber} value={0}>0</button>
                    <button onClick={inputNumber} value={'.'}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}