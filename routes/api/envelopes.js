const router = require("express").Router();
const envelopeController = require("../../controllers/envelopeController");

// Matches with "/api/books"
router.route("/")
  // .get(envelopeController.findAll)
  .post(envelopeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(envelopeController.findAll)
  // .put(envelopeController.update)
  .delete(envelopeController.remove);

module.exports = router;
