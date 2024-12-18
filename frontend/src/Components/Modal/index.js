import React, { useContext, useState } from 'react'
import { AutenticadoContexto } from '../../contexts/authContexts'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import './estilo.inicio.scss'


export default function App() {

    const { loginEntrada } = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function dadosLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warning('preencha todos os campos')
            return
        }
        try {
            await loginEntrada(email, password);
        } catch (err) {
            alert("falha ao fazer login.");
        }
    }

    return (
        <div className='conteinerInicioGeral'>
            <h1>Login</h1>

            <form onSubmit={dadosLogin}>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Enviar</button>
            </form>
            <p>para se cadastrar clique <Link to='/CadastroUsuarios'> AQUI </Link> </p>
        </div>
    )
}