import express, {Request, Response, NextFunction} from 'express';
import * as users from '../controller/users'

const router = express.Router();

/* GET users listing. */
router.post('/register', users.registerUser);

export default router
