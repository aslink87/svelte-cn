import type { Needs, PrismaClient } from '@prisma/client';
import data from './data/needs.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Needs";`);
  await prismaClient.needs.createMany({
    data: data.map<Needs>((needs) => {
      return {
        id: needs.id,
        item0: needs.item0,
        item1: needs.item1,
        item2: needs.item2,
        item3: needs.item3,
        item4: needs.item4,
        item5: needs.item5,
        item6: needs.item6,
        item7: needs.item7,
        item8: needs.item8,
        item9: needs.item9,
      };
    }),
  });
}
