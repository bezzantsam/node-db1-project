const router = require('express').Router()

router.get('/', (req, res, next) => {
  try{
    throw new Error('arr')

  }catch (err){
    next({status: 422, message: "shit"})
  }
})

router.get('/:id', (req, res, next) => {
  try{

  }catch (err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  try{

  }catch (err){
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  try{

  }catch (err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  try{

  }catch (err){
    next(err)
  }
})

router.use((err, req, res, next) => {  res.status(err.status || 500).json({message: err.message})
})

module.exports = router;
