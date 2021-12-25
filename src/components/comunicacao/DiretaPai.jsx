import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Gustavo" idade={20} nerd={false} />
            <DiretaFilho nome="Nicolas" idade={24} nerd={true} />
            <DiretaFilho nome="Ana" idade={18} nerd={true} />
        </div>
    )
}