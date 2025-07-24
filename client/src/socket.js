

import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Change to your deployed URL in production

export default socket;
