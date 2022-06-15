import { RequestHandler } from 'express';
import { jwtgenerator } from '../helpers/jwtgenerator';
import { auth_validation_parser } from '../helpers/validation-handlers/validation-handlers';
import User from '../models/user';

export const login:RequestHandler = async (req, res) => {
   try{
        const {email, password} = req.body
        //@ts-ignore
        const user = await User.login(email, password)
        user.token = jwtgenerator({
            id: user.id,

        })
        return res.json(user)
        
   }catch(ex:any){
       if(ex.message === 'Invalid credentials') return res.status(401).json({message: "invalid credentials"});
       res.status(500).json({message: 'an error occured'})    
   }
}

export const register:RequestHandler = async (req, res) => {
   try{
        const {email, password, firstname, lastname} = req.body
        //@ts-ignore
        const user = await User.create({email, password, firstname, lastname});
        const token = jwtgenerator({
            id: user.id,

        })

        return res.json({firstname, lastname, email, token, id: user.id})

   }catch(ex:any){
       const validationErrors = auth_validation_parser(ex);

       if(Object.keys(validationErrors).length > 0) return res.status(400).json(validationErrors);
       res.status(500).json({message: 'an error occured', ex})    
   }
}