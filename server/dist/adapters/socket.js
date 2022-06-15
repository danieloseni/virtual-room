"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
let io = null;
exports.default = (httpServer) => {
    if (!io) {
        io = new socket_io_1.Server(httpServer, {});
    }
    return io;
};
