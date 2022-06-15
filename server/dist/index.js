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
//@ts-ignore
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const socket_1 = __importDefault(require("./adapters/socket"));
const appendTokenDetailsToRequest_1 = require("./helpers/appendTokenDetailsToRequest");
//Routes
const user_1 = __importDefault(require("./routes/user"));
const room_1 = __importDefault(require("./routes/room"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./graphql/schema"));
const gqlErrorHandler_1 = __importDefault(require("./helpers/gqlErrorHandler"));
//express app initialization
const app = (0, express_1.default)();
//express middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/user', user_1.default);
app.use('/rooms', room_1.default);
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)((req, res, graphQLParams) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        schema: schema_1.default,
        graphiql: true,
        context: {
            user: yield (0, appendTokenDetailsToRequest_1.returnAuthToken)(req, res, null)
        },
        customFormatErrorFn: (err) => {
            return ((0, gqlErrorHandler_1.default)(err.message));
        }
    });
})));
let mongodbConnection;
const httpServer = (0, http_1.createServer)(app);
const io = (0, socket_1.default)(httpServer);
io.on('connection', conn => {
    console.log("new connection");
    conn.conn.addListener('message', (message) => {
        console.log('new message', message);
    });
    conn.conn.addListener('close', () => {
        console.log('connection closed');
    });
});
io.use((socket, next) => {
    console.log(socket);
    next();
});
const port = process.env.PORT || 5000;
mongoose_1.default.connect('mongodb://localhost/virtual_classroom').then(connection => {
    mongodbConnection = connection;
    httpServer.listen(port, () => {
        console.log('now listening on port ' + port);
    });
});
process.on('beforeExit', () => {
    mongodbConnection === null || mongodbConnection === void 0 ? void 0 : mongodbConnection.connection.close();
});
if (!process.env.jwtKeyPhrase)
    process.env.jwtKeyPhrase = "the tests i write are not for testing te app but for ensuring its quality no person shouldb e able to do it better than me";
