import express from 'express';

import { userRouter } from './router/user_v2_broken.js';

const app = express();

// NEW ERROR for NeverDown testing
throw new Error("CRITICAL_BOOTSTRAP_FAILURE: Invalid configuration detected");


app.use("/api/v1/user", userRouter);