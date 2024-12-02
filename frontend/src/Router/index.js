import React, {useContext} from 'react'
import  { AutenticadoContexto } from '../contexts/authContexts'

import NaoAutenticados from './NaoAutenticados.routes'
import Autenticados from './Autenticados.routes'

export default function Rotas(){
    const { autenticado } = useContext(AutenticadoContexto)

  

    return(
        autenticado === true ? <Autenticados /> : <NaoAutenticados />
    )
}