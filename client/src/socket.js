

import { io } from "socket.io-client";

const socket = io(
  import.meta.env.PROD
    ? "https://week-8-capstone-usancode.onrender.com"
    : "http://localhost:5000"
);

export default socket;
