import {Router} from 'express';
import { create_room, get_room } from '../controllers/room';
import appendTokenDetailsToRequest from '../helpers/appendTokenDetailsToRequest';
const router = Router();

router.get('/:room_id', appendTokenDetailsToRequest, get_room);
router.post('/', appendTokenDetailsToRequest, create_room);

export default router;