import React from "react";

import alunos from "../../data/alunos"

const alunosLI = alunos.map((alunos) =>{
    return ( 
        <li key={alunos.id}>
            {alunos.id}) {alunos.nome} -{">"} {alunos.nota}
        </li>
    )
})

export default props=>{
    // console.log(alunos)
    return (
        <div>
            <ul style={{listStyle: "none"}, {padding:0} }> {alunosLI}</ul>
        </div>)
}