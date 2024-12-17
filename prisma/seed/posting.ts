import type { PrismaClient } from '@prisma/client';
import data from './data/posting.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Posting";`);
  await prismaClient.posting.create({
    data: {
      id: data.id,
      title: data.title,
      link: data.link,
      index: data.index,
    },
  });
}
