import  prismaclient from '../../Prisma'

interface cadGrupos {
    nome: string,
 
}
class GruposServices {
    async cadastrarGrupos({nome}:cadGrupos){
        await prismaclient.cadastrarGrupos.create({
            data: {
                nome: nome
             
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso'})
    }

    

}

export {GruposServices}
