import {Schema, model} from "mongoose";

const roomSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      index: true,
      auto: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    }
  }
);

export const Room =  model("Room", roomSchema);
