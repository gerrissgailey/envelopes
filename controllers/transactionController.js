
const db = require("../models")

module.exports = {
    // findAll: function(req,res) {
    //     db.User.find( {_id: req.body.id} ) 
    //     .populate("transactions")
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err))
    // },
    findAll: function(req,res) {
        console.log(req.user)
        db.Envelope.findById( req.params.id ) 
        .populate("transactions")
        .then(x => res.json(x.transactions))
        // .then(x => console.log(x))
        .catch(err => res.status(422).json(err))
    },
    // create: function(req,res) {
    //     db.Transaction.create(req.body)
    //     .then(dbTransaction => res.json(dbTransaction))
    //     .catch(err => res.status(422).json(err))
    // },
    create: function(req,res) {
        console.log(req.body)
        db.Transaction.create(req.body)
        .then(transaction => {
            db.Envelope.findById( req.body.envelopeId )
            .then( envelope => {
                envelope.total -= transaction.amount
                envelope.transactions.push(transaction._id)
                console.log(envelope)
                envelope.save()
                .catch(e => console.log(e))
            } )
            return transaction
        })
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    },

    deposit: function (req,res) {
        console.log(req.body)
        for(let i = 0; i < req.body.deposits.length; i++) {
            db.Transaction.create({payee: req.body.payee, date: req.body.date, amount: req.body.deposits[i].value, notes: req.body.notes, envelope: req.body.deposits[i].id})
            .then(transaction => {
                db.Envelope.findById( req.body.deposits[i].id )
                .then( envelope => {
                    envelope.total += transaction.amount
                    envelope.transactions.push(transaction._id)
                    envelope.save().catch(e => console.error(e))
                } )
                return transaction
            }).catch(e => console.error(e))
        }
        res.json("Deposit Made")
    },

    remove: function(req,res) {
        db.Transaction.findById(req.params.id)
        .then(transaction => transaction.remove())
        .catch(err => res.status(422).json(err))
    }
}
