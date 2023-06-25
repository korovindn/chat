import { Room } from "../db/models/roomModel.js";

export const getRooms = async (req, res) => {
  res.json(await Room.find());
};

export const addRoom = async (req, res) => {
  try {
    await Room.create(req.body);
  } catch (e) {
    console.error(e);
    res
      .status(e.status || e.statusCode || 500)
      .json({ message: e.message || "Something went wrong" });
  }
};
