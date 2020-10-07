//Importando o express
const express = require('express')
//Importando o body-parser
const bodyParser=require('body-parser')

//Importando as rotas do aviso
const routerAvisos=require('./components/Avisos/AvisosController')

//inicializando o express
const app = express()

//Configurando a view engine
app.set('view engine','ejs')

//Configurando a pasta estática
app.use(express.static('public'))

//Configurando o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Configurando as Rotas
app.use(routerAvisos)

//Configurando a porta
app.listen(3000)

