import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { createToken, attachCookieToRes } from "../utils/createToken.js";
import CUSTOMERROR from "../errors/CUSTOMERROR.js";

export const registerUser = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) == 0;
  isFirstAccount ? (req.body.role = "admin") : (req.body.role = "user");
  const user = await User.create(req.body);
  const isEmailExist = await User.findOne({ email: req.body.email });

  if (isEmailExist) {
    throw new CUSTOMERROR("email already in use ", StatusCodes.BAD_REQUEST);
  }
  const token = createToken({ user });
  attachCookieToRes({ res, token });
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new CUSTOMERROR("invalid email adress", StatusCodes.BAD_REQUEST);
  }
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new CUSTOMERROR("incorrect password", StatusCodes.BAD_REQUEST);
  }

  const token = createToken({ user });
  attachCookieToRes({ res, token });
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "logout", {
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).send("logout user");
};
