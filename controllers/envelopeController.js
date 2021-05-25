
const db = require("../models")

module.exports = {
    findAll: function(req,res) {
        console.log(req.user)
        db.User.findById( req.params.id ) 
        .populate("envelopes")
        .then(x => res.json(x.envelopes))
        // .then(x => console.log(x))
        .catch(err => res.status(422).json(err))
    },
    findOne: function(req,res) {
        // console.log(req.user)
        db.Envelope.findById( req.params.id ) 
        // .populate("envelopes")
        .then(x => res.json(x))
        // .then(x => console.log(x))
        .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        db.Envelope.create(req.body)
        .then(envelope => {
            console.log(req.body.user)
            db.User.findById( req.body.user )
            .then( user => {
                user.envelopes.push(envelope._id)
                console.log(user)
                user.save()
                .catch(e => console.log(e))
            } )
            return envelope
        })
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        db.Envelope.findById(req.params.id)
        .then(x => x.remove())
        .catch(err => res.status(422).json(err))
    }
}
