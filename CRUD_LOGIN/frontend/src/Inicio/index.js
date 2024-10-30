import React from 'react'
import { Link } from "react-router-dom"

import './estilo.inicio.scss'

export default function Inicio() {
    return (
        <div className='conteinerInicioGeral'>
            <h1>Pagina de Inicio</h1>

            <form>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                />

                <button>Enviar</button>
            </form>
            <p>para se cadastrar clique <Link to='/CadatroUsuarios'> AQUI </Link> </p>
        </div>
    )
}