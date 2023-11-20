import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export const createUserToken = ({ user }) => {
  return {
    name: user.name,
    userId: user._id,
  };
};

export const createToken = ({ user }) => {
  const userToken = createUserToken({ user });
  return jwt.sign(userToken, process.env.JWT_SECRET);
};

export const verifyToken = ({ token }) =>
  jwt.verify(token, process.env.JWT_SECRET);

export const attachCookieToRes = ({ res, token }) =>
  res.cookie("token", token, {
    signed: true,
    secure: true,
    httpOnly: true,
  });
