import type { Hero, PrismaClient } from '@prisma/client';
import data from './data/hero.json' assert { type: 'json' };
// import prismaClient from '$lib/db.server';

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Hero";`);
  await prismaClient.hero.createMany({
    data: data.map<Hero>((hero) => {
      return {
        id: hero.id,
        title: hero.title,
        content: hero.content,
        link: hero.link,
        image: null,
        video: null,
      };
    }),
  });
}
