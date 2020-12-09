//conexão com banco de dados
const db=require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato
 * {titulo: <string> ,data: <string> ,mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){
  return db.insert(aviso).into('avisos')
  .then( _ =>{
    return{
      tipo:"sucesso", corpo:"Dados inseridos com sucesso!"
    }
  })
  .catch(erro=>{
   return{
     tipo: "erro", corpo:"Erro: "+erro}
  })

}//Fim da função salvar

/**
 * Alterar um aviso no banco de dados
 * @param {object} aviso  O aviso deve estar no seguinte formato
 * {titulo: <string> ,data: <string> ,mensagem: <string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
return db('avisos').where('ID_avisos',id).update(aviso)
.then( _ =>{
  return{
    tipo:"sucesso", corpo:"Aviso alterado com sucesso!"
  }
})
.catch(erro=>{
 return{
   tipo: "erro", corpo:"Erro: "+erro}
})
}//Fim do editar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou uma mensagem de erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos')
  .then(avisos=>{return avisos})

  .catch(erro=>{
    return{tipo: "erro", corpo:"Erro: "+erro}
   })
}//Fim do selecionarTodos

/**
 * Seleciona um aviso
 * @param {int} id  ID do aviso que será selecionado
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos',id).first()
  .then(aviso=>{return aviso})
  .catch(erro=>{
    return{tipo: "erro", corpo:"Erro: "+erro}
   })
}//Fim do selecionarAviso 

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id ID do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos',id)
}

 module.exports = 
 {
  salvar,
  selecionarTodos,
  excluir,
  selecionarAviso,
  editar
 }
