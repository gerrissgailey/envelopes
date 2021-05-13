const {Schema, model} = require ("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail } = require('validator');

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      validate: [isEmail, 'invalid email'],
      createIndexes: { unique: true },
    },
    password: {
      type: String,
      required: true
    },
    envelopes: [
      {
          type: Schema.Types.ObjectId,
          ref: "Envelope"
      }
    ],
    transactions: [
      {
          type: Schema.Types.ObjectId,
          ref: "Transaction"
      }
    ],
})

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("User", UserSchema)

module.exports = User