import React from "react"

export default function ComParametro(props){
    console.log(props)
    const nota = props.nota
    const status = props.nota >= 7 ? "Aprovado" : "em recuperação"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                 tirou
                <strong> {props.nota} </strong>
                 na prova e está
                <strong> {status} </strong>
            </p>
        </div>
    )
}