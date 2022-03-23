const db = require('../../data//db-config')

const getAll = () => {
  //select * from accounts
  return db('accounts');
}

const getById = id => {
  //select * from accounts where id = 1
  return db('accounts').where('id', id)
}

const create = async account => {
  //insert ito accounts (name, budget) values ('foo', 1000)
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  
}

const deleteById = id => {
  //delete from account where id = 1
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
