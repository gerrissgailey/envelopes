const {Schema, model} = require ("mongoose");

const TransactionSchema = new Schema({
    payee: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        // required: true
    },
    amount: {
        type: Number,
        default: 0,
        required: true
    },
    notes: {
        type: String
    },
    envelope: {
            type: Schema.Types.ObjectId,
            ref: "Envelope"
    }
})

const Transaction = model("Transaction", TransactionSchema);

module.exports = Transaction