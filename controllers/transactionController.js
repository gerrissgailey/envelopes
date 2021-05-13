
const db = require("../models")

module.exports = {
    findAll: function(req,res) {
        db.User.find( {_id: req.body.id} ) 
        .populate("transactions")
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        db.Transaction.create(req.body)
        .then(dbTransaction => res.json(dbTransaction))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        db.Transaction.findById(req.params.id)
        .then(transaction => transaction.remove())
        .catch(err => res.status(422).json(err))
    }
}
