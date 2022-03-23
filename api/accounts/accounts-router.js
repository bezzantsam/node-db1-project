const router = require('express').Router()
const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  
  try{
    res.json([{},{}])
    

  }catch (err){
    next({status: 422, message: "shit"})
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
 
  try{
    res.json('get account')

  }catch (err){
    next(err)
  }
})

router.post(
  '/', 
  md.checkAccountPayload, 
  md.checkAccountNameUnique ,(req, res, next) => {
  
  try{ 
    res.json('post account')

  }catch (err){
    next(err)
  }
})

router.put('/:id', 
md.checkAccountId,
md.checkAccountPayload,
md.checkAccountNameUnique, (req, res, next) => {
  
  try{
    res.json('update accounts')

  }catch (err){
    next(err)
  }
});

router.delete('/:id',md.checkAccountId,(req, res, next) => {
  
  try{

    res.json('delete accounts')
  }catch (err){
    next(err)
  }
})

router.use((err, req, res, next) => {  res.status(err.status || 500).json({message: err.message})
})

module.exports = router;
