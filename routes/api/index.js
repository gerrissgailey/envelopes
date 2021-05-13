const router = require("express").Router();

// const x = require("../../client/src/config/passport")


const envelopeTransactions = require("./envelopes")
const userTransactions = require("./user")
const historyTransactions = require("./transactions")


router.use("/envelopes", envelopeTransactions);
router.use("/users", userTransactions);
router.use("/transactions", historyTransactions);

module.exports = router;
