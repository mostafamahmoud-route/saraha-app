import { Message } from "../../db/models/message.model.js";
import { User } from "../../db/models/user.model.js";

export const createMessage = async (req, res, next) => {
  try {
    const { content, sender, receiver } = req.body;
    const isSender = await User.findById(sender);
    const isReceiver = await User.findById(receiver);

    if (!isSender || !isReceiver) {
      return next(new Error("Sender or receiver not found", { cause: 404 }));
    }

    const message = await Message.create({ content, sender, receiver });
    return res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error) {
    return next(error);
  }
};
