const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");

// Matches with "/api/books"
router.route("/")
  // .get(transactionController.findAll)
  .post(transactionController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(transactionController.findAll)
  // .get(transactionController.findById)
  // .put(transactionController.update)
  .delete(transactionController.remove);
  
router.route("/deposits")
  .post(transactionController.deposit);

module.exports = router;
