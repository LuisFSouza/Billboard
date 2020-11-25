const Avisos = require('./Avisos');
const router = require('express').Router();

router.get("/",(req,res)=>{
  res.send('Página inicial')
})

router.get("/avisos", async(req,res)=>{
  //res.send('Página de avisos cadastrados')
  const avisos=await Avisos.selecionarTodos()
  //res.send(avisos)
  res.render('avisos',{avisos})
})

router.get("/avisos/novo",(req,res)=>{
  res.render('formulario_avisos')
  
})

router.get("/avisos/editar/:id", async (req,res)=>{
  const id = req.params.id
  const aviso=await Avisos.selecionarAviso(id)
  res.render('formulario_avisos',{aviso})
})

router.get("/avisos/excluir/:id", async(req,res)=>{
  const id= Number(req.params.id)
  await Avisos.excluir(id);
  res.redirect('/avisos')
})

router.post("/avisos/novo", async(req,res)=>{
  const titulo=req.body.titulo;
  const data=req.body.data;
  const mensagem=req.body.mensagem;

  const msg= await Avisos.salvar({titulo,data,mensagem});

  res.render('formulario_avisos', {msg})
})

router.post("/avisos/editar/:id", async(req,res)=>{
  const id = req.body.id
  const titulo=req.body.titulo;
  const data=req.body.data;
  const mensagem=req.body.mensagem;

  const msg = await Avisos.editar({titulo,data,mensagem}, id);
  if(msg.tipo==="sucesso"){
    res.redirect("/avisos")
  }
  else{
    res.render('formulario_avisos',{msg})
  }
})

module.exports = router



