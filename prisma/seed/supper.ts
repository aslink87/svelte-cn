import type { Supper, PrismaClient } from '@prisma/client';
import data from './data/supper.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Supper";`);
  await prismaClient.supper.createMany({
    data: data.map<Supper>((supper) => {
      return {
        id: supper.id,
        img: supper.img,
        alt: supper.alt,
      };
    }),
  });
}
