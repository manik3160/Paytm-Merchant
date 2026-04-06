import express from 'express';

import { userRouter } from './router/user_v2_broken.js';

const app = express();

app.use("/api/v1/user", userRouter);