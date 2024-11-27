const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")
const porta = 3000

const app = express()

app.use(cors(), express.json())
app.post("/register", (request, response) => {
    const user = request.body.user

    console.log(user)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`);
})