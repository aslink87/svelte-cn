import express from 'express';
import { join } from 'desm';
// eslint-disable-next-line import/extensions
import { handler } from './build/handler.js';

// Serve dynamic assets from the `uploads` directory
const assetsPath = join(import.meta.url, './uploads');

const app = express();

app.use(express.static(assetsPath));

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(4173, () => {
  console.log('listening on port 4173');
  console.log('assetsPath', assetsPath);
});
