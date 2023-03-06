const Users = require('../models/Users');

exports.getAllUsers = (req, res) => {
    let results = Users.get();

    return res.send(results);
}

exports.createUser = (req, res) => {
    let newUser = req.body

    let allUsers = Users.get()

    allUsers.push(newUser)

    Users.set(allUsers)

    return res.send(newUser)
}

exports.getUserById = (req, res) => {
    let allUsers = Users.get();
    let found = allUsers.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
 };