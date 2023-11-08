import { StatusCodes } from "http-status-codes";
const errorHandler = (err, req, res, next) => {
  const customError = {
    customMsg: err.message || "something went wrong try again later",
    customCode: err.satusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  if (err && err.name === "CastError") {
    customError.customMsg = "please provide valid product id";
    customError.customCode = StatusCodes.BAD_REQUEST;
  }
  //   return res.send(err);
  return res
    .status(customError.customCode)
    .json({ message: customError.customMsg });
};

export default errorHandler;
