const Avisos = require('./Avisos');
const router = require('express').Router();

router.get("/",(req,res)=>{
  res.send('Página inicial')
})

router.get("/avisos",(req,res)=>{
  res.send('Página de avisos cadastrados')
})

router.get("/avisos/novo",(req,res)=>{
  res.render('formulario_avisos')
  
})

router.post("/avisos/novo", async(req,res)=>{
  const titulo=req.body.titulo;
  const data=req.body.data;
  const mensagem=req.body.mensagem;

  const msg= await Avisos.salvar({titulo,data,mensagem});

  res.render('formulario_avisos', {msg})
})

module.exports = router



