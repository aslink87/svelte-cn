import type { PantryCalendar, PrismaClient } from '@prisma/client';
import data from './data/pantrycalendar.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "PantryCalendar";`);
  await prismaClient.pantryCalendar.createMany({
    data: data.map<PantryCalendar>((pantryCalendar) => {
      return {
        id: pantryCalendar.id,
        img: pantryCalendar.img,
      };
    }),
  });
}
