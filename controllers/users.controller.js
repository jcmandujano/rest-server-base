const {response } = require ('express')
const getUsers = (req, res = response) => {
    const query = req.query
    res.json({
        msg:'GET API - controlador',
        query
    })
}

const putUsers = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg:'PUT API - controlador',
        id
    })
}

const postUsers = (req, res = response) => {
    res.json({
        msg:'POST API - controlador'
    })
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg:'DELETE API - controlador'
    })
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}