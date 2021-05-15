const db = require("../models")

module.exports = {
    login: function(req,res) {
        res.status(200).json(req.user)
       
    },
    create: function(req,res) {
       
        const user = new db.User(req.body)
        user.save()
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    } 
}
