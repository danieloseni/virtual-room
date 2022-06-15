"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_1 = require("../controllers/room");
const appendTokenDetailsToRequest_1 = __importDefault(require("../helpers/appendTokenDetailsToRequest"));
const router = (0, express_1.Router)();
router.get('/:room_id', appendTokenDetailsToRequest_1.default, room_1.get_room);
router.post('/', appendTokenDetailsToRequest_1.default, room_1.create_room);
exports.default = router;
