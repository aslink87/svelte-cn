/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { seed as heroSeed } from './hero';
import { seed as newsletterSeed } from './newsletter';
import { seed as calendarSeed } from './calendar';

const prismaClient = new PrismaClient();

async function main() {
  let exitStatus = 0;
  try {
    await heroSeed(prismaClient);
    await newsletterSeed(prismaClient);
    await calendarSeed(prismaClient);
  } catch (e) {
    console.log(e);
    exitStatus = 1;
  } finally {
    await prismaClient.$disconnect();
    process.exit(exitStatus);
  }
}

main();
