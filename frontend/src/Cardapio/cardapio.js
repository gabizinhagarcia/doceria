import Fotomacaron from '../Imgs/macaron.png'
import Fotoninho from '../Imgs/ninho.png'
import Fotopannacotta from '../Imgs/panna cotta.png'
import Fotocheesecake from '../Imgs/cheesecake.png'
import Fotobolo from '../Imgs/bolo.png'
import Fotolimao from '../Imgs/bololimao.png'
import Fototiramissu from '../Imgs/tiramissu.png'
import Fotocookie from '../Imgs/cookie.png'
import Fotocupcake from '../Imgs/cupcake.png'

export default function Inicio() {
    return (
        <div>
            <div class="cardapio">
            
                <div>
                    <h1>Cardapio</h1>
                    <h3>doces: </h3>
                </div>
                <div className='itens-cardapio'>
                    <img src={Fotomacaron} alt='macaron' width='80' height='60' />
                    <p><b>Macarons:</b> <br />
                    Feitos com ingredientes de alta qualidade, nossos macarons são oferecidos em uma variedade de sabores irresistíveis, como baunilha suave, chocolate intenso, framboesa fresca, e pistache rico. são ideais para qualquer ocasião.</p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotoninho} alt='ninho' width='80' height='70' />
                    <p><b>Brigadeiro Ninho com Nutella:</b> <br />
                    Experimente nosso irresistível brigadeiro ninho com Nutella. Feito com leite condensado e chocolate em pó, ele é coberto com leite em pó e tem um recheio cremoso de Nutella.</p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotocheesecake} alt='cheesecake' width='80' height='70' />
                    <p><b>Cheesecake:</b> <br />
                    Experimente nosso delicioso cheesecake de morango, Com uma base crocante de biscoito, o recheio leve de cream cheese
                    e coberto com uma generosa camada de calda de morango. </p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotopannacotta} alt='panna cotta' width='70' height='70' />
                    <p><b>Panna Cotta:</b> <br />
                    Delicie-se com nossa panna cotta, Feita com creme de leite fresco e baunilha, 
                    Servida com uma calda de frutas vermelhas ou caramelo.</p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotobolo} alt='bolo' width='90' height='60' />
                    <p><b>Bolo de Chocolate com  morango:</b> <br />
                    Delicie-se com nosso bolo de chocolate com morango, feito com camadas macias de bolo de chocolate,
                    recheado com um creme de morango fresco e coberto com uma ganache de chocolate. </p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotolimao} alt='bolo' width='90' height='60' />
                    <p><b>bolo de limão siciliano:</b> <br />
                    Experimente nosso refrescante bolo de limão siciliano, Feito com ingredientes frescos, este bolo é úmido e macio, com um toque especial de limão siciliano,
                    Coberto com um merengue delicado e levemente tostado. </p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fototiramissu} alt='tiramissu' width='100' height='90' />
                    <p><b>tiramisú:</b> <br />
                    Delicie-se com nosso autêntico tiramisù, Feito com camadas de biscoitos savoiardi embebidos em café expresso, intercalados com um cremoso recheio de mascarpone e uma leve pitada de cacau. </p>
                </div>

                <div className='itens-cardapio'>
                    <img src={Fotocookie} alt='cookie' width='80' height='70' />
                    <p><b>cookie recheado:</b> <br /> 
                     Experimente nosso irresistível cookie recheado, Com uma massa macia e saborosa, cada cookie é recheado com um generoso pedaço de chocolate, doce de leite ou Nutella. </p>
                </div>
                <div className='itens-cardapio'>
                    <img src={Fotocupcake} alt='cupcake' width='80' height='80' />
                    <p><b>cupcake red velvet:</b> <br />
                    Delicie-se com nosso cupcake red velvet, Com sua cor vibrante e textura macia, este cupcake é feito com um toque de cacau e um leve sabor de baunilha. Coberto com um generoso frosting de cream cheese. </p>
                </div>
                <a href="/" className="voltarbuton">Voltar</a>
            </div>
        </div>
    )
}