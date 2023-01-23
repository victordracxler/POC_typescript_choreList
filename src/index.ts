import express from 'express';
import cors from 'cors';

import guestsRouter from './routers/guests.routers';
import choresRouter from './routers/chores.routers';

const app = express();

app.use(express.json());
app.use(cors());
app.use(guestsRouter);
app.use(choresRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening in port ${port}`));
