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
.then(x => {console.log(x)
    process.exit(0)
})
.catch(err => process.exit(1))