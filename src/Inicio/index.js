import React from 'react'
import Fototorta from '../Imgs/torta.png'
import Fotomacarons from '../Imgs/macarons.png'
import Fotopagamentos from '../Imgs/pagamentos.png'
import FotoAcompanhamentos from '../Imgs/acompanhamento.png'
import Modal from '../Components/Modal'




export default function Inicio() {
    return (
        <div class="container">
            <div class="cardapio1">
                <div class="coluna">
                    <img src={Fotopagamentos} alt='pagamentos' width='350' height='520'/>
                </div>
                
                <Modal />
                <div class="coluna-central">
                    <a href='/cardapio' class="cardapiobuton"> <h1>Cardapio</h1> </a>
                    <img src={Fototorta} alt='torta' width='250' height='250' />
                    <img src={Fotomacarons} alt='macarons' width='250' height='250' />
                </div>
            </div>

            <div class="coluna3">
                <h2>adicionais</h2>
                <img src={FotoAcompanhamentos} alt='acompanhamento' width='90' height='90' />
                <ul>
                    <li>Batatas Fritas R$8,00</li>
                    <h5>tamanho: porção média</h5>

                    <li>Onion Rings R$12,00</li>
                    <h5> tamanho: porção média</h5>

                    <li>Mini Brusquetas R$16,00</li>
                    <h5>tamanho: porção  média (4 uniidades)</h5>

                </ul>

            </div>
        </div>


    )
}