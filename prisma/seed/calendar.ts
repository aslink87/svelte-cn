import type { Calendar, PrismaClient } from '@prisma/client';
import data from './data/calendar.json' assert { type: 'json' };

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Calendar";`);
  await prismaClient.calendar.createMany({
    data: data.map<Calendar>((calendar) => {
      return {
        id: calendar.id,
        img: calendar.img,
        alt: calendar.alt,
        content: calendar.content,
        link: calendar.link,
      };
    }),
  });
}
