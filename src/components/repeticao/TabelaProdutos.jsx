import React from "react";

import "./TabelaProdutos.css"
import produtos from "../../data/produtos";

const produtoLi = produtos.map((produto, i) =>{
    return <tr key ={produto.id}
                className={i % 2 === 0 ? "Par" : "Impar"}>
            <td>{produto.id}</td>
            <td>{produto.produto}</td>
            <td>R$ {produto.preco}</td>
        </tr>
})

export default props =>{
    return (
        <div className="TabelaProdutos">
            <table border>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoLi}
                </tbody>
            </table>
        </div>
    )
}