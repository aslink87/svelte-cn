import prismaClient from 'db';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// eslint-disable-next-line import/extensions, no-restricted-imports
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - PrismaAdapter will later be exported from lib directory
  adapter: PrismaAdapter(prismaClient),
  debug: true,
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Google will later be reworked using new auth flow
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'database',
  },
});
