import { RequestHandler } from "express"
import Room from '../models/room';

export const create_room:RequestHandler = async (req, res) => {
   try{
        const {title} = req.body;
        //@ts-ignore
        const {tokenDetails} = req;
        const {id} = tokenDetails || {};


        const room = await Room.create({title, creator: id, date_created: new Date()});
        return res.json(room);
   }catch(ex){
       res.status(500).json({message: 'an error occured'})    
   }
}

export const get_room:RequestHandler = async (req, res) => {
   try{
        const {room_id} = req.params;
        const room = await Room.findById(room_id);
        if(room) return res.json(room);

        return res.status(401).json({message: "not found"})
   }catch(ex){
       res.status(500).json({message: 'an error occured'})    
   }
}