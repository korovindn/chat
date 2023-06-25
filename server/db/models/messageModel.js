import {Schema, model} from "mongoose";

const messageSchema = new Schema(
  {
    messageId: {
      type: Schema.Types.ObjectId,
      index: true,
      auto: true,
      required: true,
      unique: true,
    },
    roomId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message =  model("Message", messageSchema);
