import FotoClassico from '../Imgs/classico2.png'
export default function Inicio() {
    return (
        <div>
            <div class="cardapio">
                <div>
                    <h1>Cardapio</h1>
                    <h3>Hambúrgueres: </h3>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>CheeseBurguer:</b> <br />
                    Hambúrguer bovino, queijo cheddar e maionese no pão especial de hambúrguer.</p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>Hambúrguer salada:</b> <br />
                    Hambúrguer bovino, queijo tipo cheddar, alface, tomate, cebola, maionese no pão especial de hambúrguer.</p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>Hambúrguer Cheddar:</b> <br />
                    Hambúrguer bovino, cebola na chapa com shoyu, queijo cheddar e maionese no pão especial de hambúrguer.</p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>Hambúrguer Vegetariano:</b> <br />
                    Hamburguer vegetariano, queijo cheddar, alface, tomate, cebola e maionese no pão especial de hambúrguer.</p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>hambúrguer com cogumelos:</b> <br />
                    Carne bovina, queijo, cogumelos, cebola caramelizada, rúcula e maionese no pão especial de hambúrguer.</p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>hambúrguer de frango:</b> <br />
                    filé de frango grelhado, queijo, alface, tomate, cebola roxa e maionese no pão especial de hambúrguer. </p>
                </div>
                <div className='itens-cardapio'>
                    <img src={FotoClassico} alt='classico' width='70' height='70' />
                    <p><b>hambúrguer vegano:</b> <br />
                    hambúrguer de grão-de-bico, queijo vegano, guacamole, pimentão gre  lhado, rúcula e maionese vegana no pão vegano. </p>
                </div>
                <a href="/" className="voltarbuton">Voltar</a>
            </div>
        </div>
    )
}