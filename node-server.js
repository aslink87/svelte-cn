import express from 'express';
// eslint-disable-next-line import/extensions
import { handler } from './build/handler.js';

const app = express();

app.use(handler);

app.listen(4173, () => {
  console.log('listening on port 4173');
});
