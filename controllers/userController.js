
const db = require("../models")

let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/budgettest", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const user = new db.User(
    {
        email: "email@email.com",
        password: "password"
    }
)
user.save()
.then(x => res.json(x))
.catch(err => res.status(422).json(err))

module.exports = {
    login: function(req,res) {
        res.status(200).json(true)
        // db.User.find( {_id: req.body.id} ) 
        // .populate("User")
        // .then(x => res.json(x))
        // .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        // db.User.create(req.body)
        const user = new db.User(req.body)
        user.save()
        .then(x => res.json(x))
        .catch(err => res.status(422).json(err))
    } //,
    // remove: function(req,res) {
    //     db.User.findById(req.params.id)
    //     .then(x => x.remove())
    //     .catch(err => res.status(422).json(err))
    // }
}
