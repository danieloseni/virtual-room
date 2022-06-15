import {Router} from 'express';
import {login, register} from '../controllers/user';
import User from '../models/user';
const router = Router();

router.post('/signup', register);
router.post('/signin', login);
router.delete('/', async (req,res,next) => {
    await User.deleteMany({})
    res.json({message: "done"})
});

export default router;