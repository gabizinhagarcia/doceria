import Fotocupcake from '../Imgs/cupcake.png'
import Fototiramissu from '../Imgs/tiramissu.png'
import Fotocheesecake from '../Imgs/cheesecake.png'
import Fotomacaron from '../Imgs/macaron.png'

export default function Inicio() {
    return (
        <div class="MaisVendidos">
           <h1> Mais Vendidos </h1>
           <a href="/" className="voltarbuton">Voltar</a>
           <div className='itens-MaisVendidos'>
           <img src={Fotocupcake} alt='cupcake' width='80' height='80' />
                    <p><b>cupcake red velvet:</b> <br />
                    Delicie-se com nosso cupcake red velvet, Com sua cor vibrante e textura macia, este cupcake é feito com um toque de cacau e um leve sabor de baunilha. Coberto com um generoso frosting de cream cheese. </p>
                </div>
                <div className='itens-MaisVendidos'>
                    <img src={Fototiramissu} alt='tiramissu' width='100' height='90' />
                    <p><b>tiramisú:</b> <br />
                    Delicie-se com nosso autêntico tiramisù, Feito com camadas de biscoitos savoiardi embebidos em café expresso, intercalados com um cremoso recheio de mascarpone e uma leve pitada de cacau. </p>
                </div>
                <div className='itens-MaisVendidos'>
                    <img src={Fotocheesecake} alt='cheesecake' width='80' height='70' />
                    <p><b>Cheesecake:</b> <br />
                    Experimente nosso delicioso cheesecake de morango, Com uma base crocante de biscoito, o recheio leve de cream cheese
                    e coberto com uma generosa camada de calda de morango. </p>
                </div>
                <div className='itens-MaisVendidos'>
                    <img src={Fotomacaron} alt='macaron' width='80' height='60' />
                    <p><b>Macarons:</b> <br />
                    Feitos com ingredientes de alta qualidade, nossos macarons são oferecidos em uma variedade de sabores irresistíveis, como baunilha suave, chocolate intenso, framboesa fresca, e pistache rico. são ideais para qualquer ocasião.</p>
                </div>
            </div>
            
    )
}