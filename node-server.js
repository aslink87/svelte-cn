import express from 'express';
import { join } from 'desm';
// eslint-disable-next-line import/extensions
import { handler } from './build/handler.js';

const assetsPath = join(import.meta.url, './uploads');

const app = express();

app.use(express.static(assetsPath));

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(5173, () => {
  console.log('listening on port 5173');
  console.log('assetsPath', assetsPath);
});
