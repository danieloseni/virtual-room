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
exports.getUser = exports.login = exports.register = void 0;
const jwtgenerator_1 = require("../../helpers/jwtgenerator");
const user_1 = __importDefault(require("../../models/user"));
const register = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, password } = args;
    const user = yield new user_1.default({
        firstname, lastname, email, password
    }).save();
    return {
        firstname, lastname, email, token: (0, jwtgenerator_1.jwtgenerator)({ id: user.id })
    };
});
exports.register = register;
const login = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = args;
    //@ts-ignore
    const user = yield user_1.default.login(email, password);
    return Object.assign(Object.assign({}, user), { token: (0, jwtgenerator_1.jwtgenerator)({ id: user.id }) });
});
exports.login = login;
const getUser = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getUser = getUser;
