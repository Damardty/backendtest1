import express from 'express';
import{
    create
}from './user.controller';

let userRouter = express.router();

userRouter.post('/', create);
export default userRouter;
