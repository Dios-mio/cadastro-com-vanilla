const db=require('../models/connect')
module.exports={
    async index(req,res,next){
        try{
            await db.connect();
            res.send("hello")
            const {nome,senha,email,paises,produtos}=req.body
             const data={
                 nome:req.body.nome,
                 senha:req.body.senha,
                 email:req.body.email,
                 paises:req.body.paises,
                 produtos:req.body.produtos
             }
        //     await db.query(
          //   'CREATE TABLE usuarios2(id serial PRIMARY KEY, nome VARCHAR (50) UNIQUE NOT NULL,senha integer NOT NULL, email VARCHAR(50) UNIQUE NOT NULL,paises VARCHAR(20),produtos VARCHAR(40))')
             const select='INSERT INTO usuarios2(nome,senha,email,paises,produtos)VALUES($1,$2,$3,$4,$5)'
             await db.query(select,[data.nome,data.senha,data.email,data.paises,data.produtos])
             const mostrarDados=await db.query("SELECT * FROM usuarios2")
             await db.end();
             console.log(mostrarDados)
        }
            catch(e){
                res.status(201).send(e)
            }
       
      
    }

}