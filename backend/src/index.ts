import express from 'express';

import { userRouter } from './router/user.js';

const app = express();

app.use("/api/v1/user", userRouter);