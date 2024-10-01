import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cardapio from '../Cardapio/cardapio'

import Cabecalho from '../Components/Cabecalho'
import Inicio from '../Inicio'
import Rodape from '../Components/Rodape'

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/cardapio' element={<Cardapio />} />


                <Route path='*' element={<Inicio />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}