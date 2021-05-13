
const db = require("../models")

module.exports = {
    findAll: function(req,res) {
        db.User.find( {_id: req.body.id} ) 
        .populate("envelopes")
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        db.Envelope.create(req.body)
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        db.Envelope.findById(req.params.id)
        .then(x => x.remove())
        .catch(err => res.status(422).json(err))
    }
}
