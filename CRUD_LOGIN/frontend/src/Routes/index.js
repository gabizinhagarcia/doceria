import React, {useContext} from 'react'
import  { AutenticadoContexto } from '../contexts/authContexts'

import NAutenticado from './nAutenticado.routes'
import Autenticado from './autenticado.routes'

export default function Rotas(){
    const { autenticado } = useContext(AutenticadoContexto)
  

    return(
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}