import prismaClient from '$lib/db.server';

export async function load() {
  const hero = await prismaClient.hero.findUnique({
    where: {
      id: '9d5a8c19-6464-4763-b532-2817c4bb2033',
    },
  });
  if (!hero) {
    return '';
  }
  return { hero };
}
