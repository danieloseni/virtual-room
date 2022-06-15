"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Room title is required"]
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    date_created: Date
});
exports.default = (0, mongoose_1.model)('room', RoomSchema);
