import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Inicio'
import CadastroUsuarios from '../CadastroUsuarios/CadastroUsuarios'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Inicio />} />
                <Route path='/CadatroUsuarios' element={< CadastroUsuarios />} />
                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}