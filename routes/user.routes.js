const { Router } = require('express')
const { getUsers, postUsers, putUsers, deleteUsers } = require('../controllers/users.controller')

const router = Router()

router.get('/', getUsers)

router.put('/:id', putUsers)

router.post('/' ,postUsers)

router.delete('/', deleteUsers)

 module.exports = router