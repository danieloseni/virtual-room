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
exports.addRoom = exports.getRooms = exports.getRoom = void 0;
const room_1 = __importDefault(require("../../models/room"));
const getRoom = (parent, args) => {
    const { id } = args;
    return room_1.default.findOne({ _id: id });
};
exports.getRoom = getRoom;
const getRooms = (parent, args, context) => {
    return room_1.default.find({});
};
exports.getRooms = getRooms;
const addRoom = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = args;
    let room = yield new room_1.default({
        title
    }).save();
    return room;
});
exports.addRoom = addRoom;
