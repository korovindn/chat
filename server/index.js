import cors from "cors";
import express from "express";
import { createServer } from "http";
import { ALLOWED_ORIGIN } from "./config.js";
import { connectDb } from "./db/db.js";
import { connectSocket } from "./socket/socket.js";
import { addRoom, getRooms } from "./handlers/roomsHandlers.js";

const app = express();

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  })
);

app.use(express.json());

const router = express.Router();
router.get("/rooms", getRooms);
router.post("/rooms", addRoom);

app.use("/api", router);

connectDb();

const server = createServer(app);

connectSocket(server);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
