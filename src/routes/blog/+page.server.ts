import prismaClient from '$lib/db.server';

export async function load() {
  const blogs = await prismaClient.blog.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  if (!blogs) {
    return null;
  }

  return { blogs };
}
