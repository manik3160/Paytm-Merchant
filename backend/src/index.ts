import express from 'express';

import { userRouter } from './router/user.ts';

const app = express();

// NEW ERROR for NeverDown testing


app.use("/api/v1/user", userRouter);