"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_room = exports.create_room = void 0;
const room_1 = __importDefault(require("../models/room"));
const create_room = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        //@ts-ignore
        const { tokenDetails } = req;
        const { id } = tokenDetails || {};
        const room = yield room_1.default.create({ title, creator: id, date_created: new Date() });
        return res.json(room);
    }
    catch (ex) {
        res.status(500).json({ message: 'an error occured' });
    }
});
exports.create_room = create_room;
const get_room = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room_id } = req.params;
        const room = yield room_1.default.findById(room_id);
        if (room)
            return res.json(room);
        return res.status(401).json({ message: "not found" });
    }
    catch (ex) {
        res.status(500).json({ message: 'an error occured' });
    }
});
exports.get_room = get_room;
