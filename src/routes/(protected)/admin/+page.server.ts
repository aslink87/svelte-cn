import { error } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';

export async function load() {
  const users = await prismaClient.user.findMany({
    include: { settings: true },
  });

  const links = ['frontpage', 'admins'];
  if (users) {
    return {
      users,
      links,
    };
  }
  // TODO: handle errors
  throw error(404, 'error');
}
