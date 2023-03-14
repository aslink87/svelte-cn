// import prismaClient from 'db';
// import { redirect, type Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { config } from '$/lib/config.server';
// eslint-disable-next-line import/extensions, no-restricted-imports
import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - PrismaAdapter will later be exported from lib directory
  // adapter: PrismaAdapter(prismaClient),
  debug: true,
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Google will later be reworked using new auth flow
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
  trustHost: true,
  // session: {
  //   strategy: 'database',
  // },
});

// const handleAuth = (async (...args) => {
//   const [{ event }] = args;
//   return SvelteKitAuth({
//     trustHost: true,
//     adapter: PrismaAdapter(prismaClient),
//     providers: [
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       Google({
//         clientId: config.GOOGLE_CLIENT_ID,
//         clientSecret: config.GOOGLE_CLIENT_SECRET,
//       }),
//     ],
//     callbacks: {
//       async session({ session, user }) {
//         session.user = {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//         };
//         event.locals.session = session;
//         return session;
//       },
//     },
//     events: {
//       async createUser(message) {
//         const locale = await prismaClient.locale.findFirst({
//           where: {
//             id: event.locals.locale,
//           },
//         });
//         await prismaClient.userSettings.create({
//           data: {
//             localeId: locale?.id ?? 'en-US',
//             userId: message.user.id,
//           },
//         });
//       },
//     },
//   })(...args);
// }) satisfies Handle;
//
// const protectedHandle = (async ({ event, resolve }) => {
//   await event.locals.getSession();
//   if (!event.locals.session && event.route.id?.includes('protected')) {
//     throw redirect(302, '/');
//   }
//   return resolve(event);
// }) satisfies Handle;
//
// export const handle = sequence(handleAuth, protectedHandle);
