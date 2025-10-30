import mongoose, { Schema, Types } from "mongoose";

const messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: Types.ObjectId,
    ref: "User",
    required: false,
  },
  receiver: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Message = mongoose.model("Message", messageSchema);
