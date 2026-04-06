import {Router} from 'express';

export const userRouter = Router();

userRouter.post('/sign-up',(req,res)=>{

})

userRouter.post('/signin',(req,res)=>{
    // @ts-ignore - intentional error for NeverDown testing
    res.json({ message: "Sign in successful" });
})