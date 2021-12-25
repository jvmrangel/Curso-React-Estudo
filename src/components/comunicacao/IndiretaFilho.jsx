import React from "react";

export default props => {

    const max = 90
    const min = 25
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const gerarNerd = () =>  Math.round(Math.random()) === 1
    return (
        <div>
            <div>
                Filho
            </div>
            { /*<button onClick= {e=> props.quandoClicar("Pedro", 42, true)}*/ }
            <button onClick={
                function (e) {
                    props.quandoClicar("Pedro", gerarIdade(), gerarNerd())
                }
            }>Fornecer Informações</button>
        </div>
    )
}