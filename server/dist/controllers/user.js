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
exports.register = exports.login = void 0;
const jwtgenerator_1 = require("../helpers/jwtgenerator");
const validation_handlers_1 = require("../helpers/validation-handlers/validation-handlers");
const user_1 = __importDefault(require("../models/user"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        //@ts-ignore
        const user = yield user_1.default.login(email, password);
        user.token = (0, jwtgenerator_1.jwtgenerator)({
            id: user.id,
        });
        return res.json(user);
    }
    catch (ex) {
        if (ex.message === 'Invalid credentials')
            return res.status(401).json({ message: "invalid credentials" });
        res.status(500).json({ message: 'an error occured' });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, firstname, lastname } = req.body;
        //@ts-ignore
        const user = yield user_1.default.create({ email, password, firstname, lastname });
        const token = (0, jwtgenerator_1.jwtgenerator)({
            id: user.id,
        });
        return res.json({ firstname, lastname, email, token, id: user.id });
    }
    catch (ex) {
        const validationErrors = (0, validation_handlers_1.auth_validation_parser)(ex);
        if (Object.keys(validationErrors).length > 0)
            return res.status(400).json(validationErrors);
        res.status(500).json({ message: 'an error occured', ex });
    }
});
exports.register = register;
