const { json } = require('express');
const express = require('express')
const app = express()
const PORT = 8080
let views = 0;
app.get('/',(req,res)=>{
    res.send(`<h1 style='color: blue'>Welcome to express server</h1>`)
})
app.get('/visitas',(req,res)=>{
    views++;
    res.send(`<p>La cantidad de visitas es ${n}</p>`)
})
app.get('/fyh',(req,res)=>{
    const currentTime = new Date().toLocaleString()
    res.send(`${currentTime}`)
})

// Configuramos el puerto
const server = app.listen(PORT,()=>{
    console.log(`Express server listening to port ${PORT}`)
})

// Escuchamos un evento en caso de error
server.on('error',error =>{
    console.log(`server error ${error}`)
})