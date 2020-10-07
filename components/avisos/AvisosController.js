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

module.exports = router
