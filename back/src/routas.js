const express=require('express')
const { Router } = require('express')
const Login =require('./controlers/cadastro')
const routes = express.Router()

routes.post('/gui',Login.index);
module.exports=routes