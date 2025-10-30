import { connectDB } from "./db/db-connection.js";
import userRouter from "./modules/user/user.controller.js";
import messageRouter from "./modules/message/message.controller.js";

export const bootStrap = async (express, app) => {
  app.use(express.json()); // parse the request data

  await connectDB();

  // user router
  app.use("/users", userRouter);

  // message router
  app.use("/messages", messageRouter);

  app.use((error, req, res, next) => {
    return res.status(error.cause || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  });

  app.all("/*ay7aga", (req, res, next) => {
    return res.status(404).json({
      message: "Not found",
    });
  });
};
