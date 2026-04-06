import {Router} from 'express';

export const userRouter = Router();

userRouter.post('/sign-up',(req,res)=>{

})

userRouter.post('/signin',(req,res)=>{
    // @ts-ignore - intentional error for NeverDown testing
    res.jon({ message: "Sign in successful" });
})