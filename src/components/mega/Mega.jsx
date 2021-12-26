import React, {useState} from "react";
import Ball from "./Ball";
import "./Mega.css"

export default props => {
    

    function quandoMudar(e) {
        setQntd(e.target.value)
    }

    function getRandomIntInclusive() {
        const min = 1
        const max = 60
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function gerarNumeros(qntd){
       var numeroGerado = [];
       while (numeroGerado.length<qntd){
            var aleatorio = getRandomIntInclusive()
            if (numeroGerado.indexOf(aleatorio) == -1) numeroGerado.push(aleatorio)
       }
       
       return numeroGerado.sort((n1, n2) => n1 - n2)
    }
    const [qntd, setQntd] = useState(props.qntd || 6)
    const numerosIniciais = Array(qntd).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            {/* <h3>{numeros.join(" - ")}</h3> */}
            <Ball number={numeros} />
            
            <label htmlFor="QntdInput">Quantidade de Numeros a gerar: </label>
            <input
                min="4"
                max="10"
                id="QntdInput"
                type="number"
                value={qntd}
                onChange={quandoMudar}>
            </input>
            <br/>
            <button onClick={() => setNumeros(gerarNumeros(qntd))}>Gerar</button>
            
        </div>
    )    
}