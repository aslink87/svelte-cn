import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const actions = {
  default: async (event: RequestEvent) => {
    if (!event.locals.session.user?.settings.approved) {
      throw redirect(302, '/');
    }
  },
};
