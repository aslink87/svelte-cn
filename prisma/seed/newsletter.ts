import type { Newsletter, PrismaClient } from '@prisma/client';
import data from './data/newsletter.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Newsletter";`);
  await prismaClient.newsletter.createMany({
    data: data.map<Newsletter>((newsletter) => {
      return {
        id: newsletter.id,
        date: newsletter.date,
        title: newsletter.title,
        doc: newsletter.doc,
        index: newsletter.index,
      };
    }),
  });
}
