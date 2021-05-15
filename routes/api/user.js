const router = require("express").Router();
const userController = require('../../controllers/userController')
const passport = require("passport")

// Matches with "/api/books"

router.route("/login")
  .post(passport.authenticate('local'), userController.login)
  

router.route("/")
  // .get(userController.findAll)
  .post(userController.create);


// router
//   .route("/:id")
//   // .get(userController.findById)
//   // .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
