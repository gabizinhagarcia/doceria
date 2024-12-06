import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './estilo.cadUsuarios.scss'
import apilocal from '../Api/apiLocal'

export default function CadastrarUsuarios() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')


    async function CadastrarUsuarios() {
        try {
            if(!nome || email || password){
                alert("campos em branco")
                return
            }
        await apilocal.post('/CadastrarUsuarios', {
            nome,
            email,
            password,
            cpf,
            telefone, 
            cep,

            })
            alert('cadastro efetuadon com sucesso')
    
        } catch (err) {
            alert('Erro ao comunicar com BackEnd')
        }
    }

    return (
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Formulario de Cadastro de Usuários</h1>
            <form onSubmit={CadastrarUsuarios}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                  <input
                    type="text"
                    placeholder='Digite Seu cpf'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                  <input
                    type="Text"
                    placeholder='Digite Seu telefone '
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                  <input
                    type="text"
                    placeholder='Digite Sua cep'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <button>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}