import express from 'express';
import { returnRes } from './routes';

const app = express();

app.get('/', returnRes);

app.listen(3333);