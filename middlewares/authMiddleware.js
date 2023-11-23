import CUSTOMERROR from "../errors/CUSTOMERROR.js";
import { StatusCodes } from "http-status-codes";
import { verifyToken } from "../utils/createToken.js";

const authMiddleware = async (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CUSTOMERROR("invalid token", StatusCodes.BAD_REQUEST);
  }
  try {
    const user = await verifyToken({ token });

    req.user = user;
    next();
  } catch (error) {
    throw new CUSTOMERROR(error);
  }
};

export default authMiddleware;
