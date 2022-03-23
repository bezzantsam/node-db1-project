exports.checkAccountPayload = (req, res, next) => {
  console.log('Checking payload middleware')
 next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log('Checking unique middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  console.log('Checking id middleware')
  next()
}
