import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroUsuarios from '../CadastroUsuarios/CadastroUsuarios'
import Inicio from '../Inicio'

import Cardapio from '../Cardapio/cardapio'
import MaisVendidos from '../MaisVendidos/MaisVendidos'
import Cabecalho from '../Components/Cabecalho'
import Rodape from '../Components/Rodape'

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='/mais vendidos' element={<MaisVendidos />} />
                <Route path='/CadastroUsuarios' element={< CadastroUsuarios />} />
                

                <Route path='*' element={<Inicio />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}