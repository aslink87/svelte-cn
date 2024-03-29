/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { seed as heroSeed } from './hero';
import { seed as newsletterSeed } from './newsletter';
import { seed as calendarSeed } from './calendar';
import { seed as supperSeed } from './supper';
import { seed as pantryCalendarSeed } from './pantrycalendar';
import { seed as blogSeed } from './blog';
import { seed as needsSeed } from './needs';

const prismaClient = new PrismaClient();

async function main() {
  let exitStatus = 0;
  try {
    await heroSeed(prismaClient);
    await newsletterSeed(prismaClient);
    await calendarSeed(prismaClient);
    await supperSeed(prismaClient);
    await pantryCalendarSeed(prismaClient);
    await blogSeed(prismaClient);
    await needsSeed(prismaClient);
  } catch (e) {
    console.log(e);
    exitStatus = 1;
  } finally {
    await prismaClient.$disconnect();
    process.exit(exitStatus);
  }
}

main();
