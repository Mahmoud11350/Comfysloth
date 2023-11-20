import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  email: {
    type: String,
    validate: validator.isEmail,
    required: [true, "email is required"],
    unique: [true, "email already in use "],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    trim: true,
    minlength: 6,
  },
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    type: String,
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export default model("User", UserSchema);
