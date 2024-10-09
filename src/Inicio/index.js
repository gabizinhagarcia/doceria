import React from 'react'
import Fototorta from '../Imgs/torta.png'
import Fotomacarons from '../Imgs/macarons.png'
import Fotopagamentos from '../Imgs/pagamentos.png'

import Modal from '../Components/Modal'




export default function Inicio() {
    return (
        <div class="container">
            <div class="cardapio1">
                <div class="coluna">
                <img src={Fotopagamentos} alt='pagamentos' width='350' height='520' />
                </div>
                
                <Modal />
                <div class="coluna-central">
                    <a href='/cardapio' class="cardapiobuton"> <h1>Cardapio</h1> </a>
                    <img src={Fototorta} alt='torta' width='250' height='250' />
                    <img src={Fotomacarons} alt='macarons' width='250' height='250' />
                </div>
            </div>

            <div class="coluna3">
            <a href='/mais vendidos' class="cardapiobuton"> <h1>mais vendidos</h1> </a>
            
            </div>
        </div>


    )
}