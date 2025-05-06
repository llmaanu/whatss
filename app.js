/*******************************************
 * Objetivo; CRr
 * Data:04/02/2025
 * Autor: Manuela 
 * Versão:1.0
 *******************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//INICIA A UTILIZACAO DO EXPRESS
const app= express()

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')


    response.header('Access-Control-Allow-Methods','GET')
    app.use(cors())
    next()
})

const funcoes = require('./modulo/funcoes.js')

app.get('/v1/whatsapp/pessoal/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadospessoais(numero)
    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/mutavel/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadosmutaveis(numero)
    console.log(contato)

    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/contatos/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadoscontatos(numero)


    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/conversas/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadosconversas(numero)


    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})


const part=process.env.PORT || 8080

app.listen(part, function(){
    console.log('API funcionando e aguardando requisições..')
})