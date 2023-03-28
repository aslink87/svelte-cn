import { error } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';

export async function load() {
  try {
    const users = await prismaClient.user.findMany({
      include: { settings: true },
    });
    if (users) {
      return {
        users,
      };
    }
  } catch (e) {
    /* empty */
  }
  // TODO: handle errors
  throw error(404, 'error');
}
