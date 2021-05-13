const {Schema, model} = require ("mongoose");

const EnvelopeSchema = new Schema({
    envelopeName: {
        type: String,
        required: true
    },
    total: {
        type: Number,
    },
    transactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Transaction"
        }
    ],
})

const Envelope = model("Envelope", EnvelopeSchema)

module.exports = Envelope