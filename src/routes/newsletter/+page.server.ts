import prismaClient from '$lib/db.server';

export async function load() {
  const newsletters = await prismaClient.newsletter.findMany();
  if (!newsletters) {
    return { title: 'Not found', content: 'Not found' };
  }
  return { newsletters };
}
