const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});


UserSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) { // Use 'Password' instead of 'password'
    return next();
  }
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.Password, saltRounds); // Use 'Password' instead of 'password'
    this.Password = hashedPassword; // Use 'Password' instead of 'password'
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
