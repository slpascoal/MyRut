import React from "react";
import style from './style.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    chieldren?: React.ReactNode,
    texto: string
}

function Botao({onClick, type, chieldren, texto}: Props){
    return(
        <button onClick={onClick} type={type} className={style.botao}>
             {texto}
        </button> 
     )
}


export default Botao;