import type { Blog, PrismaClient } from '@prisma/client';
import data from './data/blog.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Blog";`);
  await prismaClient.blog.createMany({
    data: data.map<Blog>((blog) => {
      return {
        id: blog.id,
        title: blog.title,
        date: blog.date,
        author: blog.author,
        content: blog.content,
        img: blog.img,
        caption: blog.caption,
      };
    }),
  });
}
