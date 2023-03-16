import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { config } from '$/lib/config.server';
import prismaClient from './lib/db.server';

const handleAuth = (async (...args) => {
  const [{ event }] = args;
  return SvelteKitAuth({
    debug: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - PrismaAdapter will later be exported from lib directory
    adapter: PrismaAdapter(prismaClient),
    providers: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Google will later be reworked using new auth flow
      Google({
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
      }),
    ],
    secret: config.AUTH_SECRET,
    trustHost: true,
    callbacks: {
      async session({ session, user }) {
        session.user = {
          name: user.name,
          email: user.email,
        };
        event.locals.session = session;
        return session;
      },
    },
    session: {
      strategy: 'database',
      generateSessionToken: () => {
        return crypto.randomUUID();
      },
      // idle session expire time
      maxAge: 30 * 24 * 60 * 60,
      // throttle how frequently to write to DB to extend session
      updateAge: 24 * 60 * 60,
    },
  })(...args);
}) satisfies Handle;

const protectedHandle = (async ({ event, resolve }) => {
  await event.locals.getSession();
  if (!event.locals.session && event.route.id?.includes('protected')) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw redirect(302, '/');
  }
  return resolve(event);
}) satisfies Handle;

export const handle = sequence(handleAuth, protectedHandle);
