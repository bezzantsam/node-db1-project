const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  console.log('Checking payload middleware')
 next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  
}

exports.checkAccountId = async (req, res, next) => {
try{
const account = await Account.getById(req.params.id)
if(!account){
  next({ status: 404, message: 'Account not found' })
}else {
  req.account = account
  next(p)
}
}catch(err){
next(err)

}
}
