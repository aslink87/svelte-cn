/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { seed as heroSeed } from './hero';

const prismaClient = new PrismaClient();

async function main() {
  let exitStatus = 0;
  try {
    await heroSeed(prismaClient);
  } catch (e) {
    console.log(e);
    exitStatus = 1;
  } finally {
    await prismaClient.$disconnect();
    process.exit(exitStatus);
  }
}

main();
