import prismaClient from "../../prisma"

interface CadProdutos{
    nome: string
    descricao: string
    preco: string
    categoria: string
}

class ProdutosServices{
 async cadastrar_Produtos({nome, descricao, preco, categoria}: CadProdutos){
    const resposta = await prismaClient.cadastroProdutos.create({
        data: {
            nome: nome,
           descricao: descricao,
           preco: preco,
           categoria:categoria
        }
    })
    return ({dados: 'Cadastro Efetuado com Sucesso'})
 }
 async consultar_produtos(){
    const resposta = await prismaClient.cadastroProdutos.findMany({
        select: {
            nome: true,
            descricao: true,
            preco: true,
            categoria: true
        }
    })
    return resposta 
 }
 
}

export { ProdutosServices }