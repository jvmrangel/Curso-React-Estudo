import React from "react";
import "./App.css"

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";


// versão enxuta
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo="#13 - Mega (Gerador de Numeros)" color="#2E4053">
        <Mega/>
      </Card>

      <Card titulo="#12 - Contador" color="#a08b4a">
        <Contador numeroInicial={10}/>
      </Card>

      <Card titulo="#11 - Componente Controlado (Input - Formulário)" color="#93a0a6">
        <Input/>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#eeac60">
        <IndiretaPai/>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#d5877d">
        <DiretaPai/>
      </Card>
      
      <Card titulo="#08 - Renderização Condicional" color="#59C4C5">
        <ParOuImpar numero={80} />
        <UsuarioInfo usuario={{nome: "Jonatan"}} />
        <UsuarioInfo usuario={{email: "Jonatan@gmail.com"}} />
      </Card>

      <Card titulo="#07 - Repetição de Produtos" color="#FFC33C">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição de Alunos " color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#69D2E7">
        <Familia sobrenome="Rangel">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Asnésio" />
            <FamiliaMembro nome="Lucas" />
          </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={0} max={60}/>
      </Card>

      <Card titulo="#03 - Fragmento" color="#F38630">
        <Fragmento/>
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E0E4CC">
        <ComParametro
          titulo="O aluno: "
          aluno="Jota Vrau"
          nota={9.5}
        ></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#A7DBDB">
        <Primeiro/>
      </Card>
    </div>    
  </div>
);

// Versão completa
// export default function App(props){
//     return(
//         <>
//        <div id="app">
//            <h1>Fundamentos React</h1>
//            <ComParametro
//                 titulo="O aluno: "
//                 aluno="Jota Vrau"
//                 nota={9.5}>
//             </ComParametro>
//             <ComParametro
//                 titulo="O aluno: "
//                 aluno="Lavínia"
//                 nota={4.5}>
//             </ComParametro>
//             <Primeiro></Primeiro>
//        </div>
//     </>
//     )
// }
