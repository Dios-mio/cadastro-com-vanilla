const express=require('express')
const cors=require('cors')

const routes=require('./routas')

const app=express()
app.use(cors());
app.use(express.json({limit:'1mb'}))
app.use(routes)
app.listen(3333,()=>{
    console.log('Listening on port 3333')
})