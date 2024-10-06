const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password,10)
  next();
});

userSchema.methods.isPasswordCorrect =async function (password)
{
  return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, dkgdkv4u5u4uhfbbf478fbcbcf, { expiresIn: '1h' });
  return token;
};
const User = mongoose.model("User", userSchema);

module.exports = User;