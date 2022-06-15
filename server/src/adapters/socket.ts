import {Server} from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

let io:Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null = null;


export default (httpServer: any) => {
    if(!io){
        io = new Server(httpServer, {})

    }

    return io;
}

