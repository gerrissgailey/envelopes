const {Schema, model} = require ("mongoose");

const TransactionSchema = new Schema({
    payee: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    }
})

const transaction = model("Transaction", TransactionSchema);

module.exports = transaction