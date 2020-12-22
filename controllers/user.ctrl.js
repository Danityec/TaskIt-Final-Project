const User = require('../models/User');

getUsers = (req, res) => {
    User.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getUser = (req, res) => {
    User.find({ id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createUser = (req, res) => {
    const { body } = req
    const user = new User();
    user.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId

    User.save()
        .then(() => res.json({id:`${user.id}`}))
        .catch(err => console.log(err))
}

updateUSer = (req, res) => { 
    const { body } = req
    const user = {};
    user.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId
    
    const query = {id: req.params.id}

    User.updateOne(query, user)
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteUser = (req, res) => {     
    User.deleteOne({id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
}