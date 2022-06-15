//@ts-ignore
import express from 'express';
import mongoose from 'mongoose';
import {createServer} from 'http';
import cors from 'cors';
import socket from './adapters/socket';
import { returnAuthToken } from './helpers/appendTokenDetailsToRequest';

//Routes
import userRoutes from './routes/user';
import roomRoutes from './routes/room';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import gqlErrorHandler from './helpers/gqlErrorHandler';

//express app initialization
const app = express();

//express middlewares
app.use(cors())
app.use(express.json())
app.use('/user', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/graphql', graphqlHTTP(async (req, res, graphQLParams) => ({
    
    schema: schema,
    graphiql: true,
    context: {
        user: await returnAuthToken(req, res, null)
    },
    customFormatErrorFn: (err) => {
        return (gqlErrorHandler(err.message))
    }
    
})))

let mongodbConnection:typeof mongoose | null;

const httpServer = createServer(app);
const io = socket(httpServer);

io.on('connection', conn => {
    console.log("new connection")
    conn.conn.addListener('message', (message:any) => {
        console.log('new message', message)
    })
    conn.conn.addListener('close', () => {
        console.log('connection closed')
    })
})

io.use((socket, next) => {
    console.log(socket)
    next()
})


const port = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost/virtual_classroom').then(connection=> {
    mongodbConnection = connection;
    httpServer.listen(port, () => {
        console.log('now listening on port ' + port)

    });
})

process.on('beforeExit', () => {
    mongodbConnection?.connection.close()
})


if(!process.env.jwtKeyPhrase) process.env.jwtKeyPhrase = "the tests i write are not for testing te app but for ensuring its quality no person shouldb e able to do it better than me";