import { User } from "../../db/models/user.model.js";
import * as userSchema from "./user.schema.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const isExist = await User.findOne({ email });

    if (isExist) {
      return next(new Error("Email already exists", { cause: 409 }));
    }

    const user = await User.create({ name, email, password });
    user.password = undefined;
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password }, { password: 0 });
    if (!user) {
      return next(new Error("Email or password is incorrect", { cause: 404 }));
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};
