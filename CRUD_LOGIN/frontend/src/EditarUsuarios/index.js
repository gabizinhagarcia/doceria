import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apilocal from '../Api/apiLocal'
import './estilo.EditarUsuarios.scss'

export default function EditarUsuarios() {
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        async function consultarDados() {
            const resposta = await apilocal.post('/ConsultarUsuariosUnico', {
                id
            })
            setNome(resposta.data.nome)
            setEmail(resposta.data.email)
            setPassword(resposta.data.senha)
        }
        consultarDados()
    }, [])

    async function enviarAlteracao(e) {
        e.preventDefault()
        alert(nome + email + password)
    }

    return (
        <div className="containerEditarUsuarios">
            <h1> Editar Usuarios</h1>
            {id}
            <form onSubmit={enviarAlteracao}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                disabled
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'> enviar </button>

            </form>
        </div>
    )
}