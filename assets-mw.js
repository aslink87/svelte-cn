import express from 'express';

const assets = express.static('./uploads');
const configureServer = (
  /** @type {{ middlewares: { use: (arg0: import("serve-static").RequestHandler<express.Response<any, Record<string, any>>>) => void; }; }} */
  server,
) => {
  server.middlewares.use(assets);
};
export const assetsPlugin = () => ({
  name: 'assets-vite-plugin',
  configureServer,
  configurePreviewServer: configureServer,
});
