const {Schema, model} = require ("mongoose");

const EnvelopeSchema = new Schema({
    envelopeName: {
        type: String,
        required: true
    },
    total: {
        type: Number,
    },
    transactionId: {
        type: Number
    }
})

const envelope = model("Envelope", EnvelopeSchema)

module.exports = envelope