import prismaClient from '$lib/db.server';

export const ssr = false;

export async function load() {
  const calendar = await prismaClient.calendar.findFirst();
  if (!calendar) {
    return null;
  }

  const supper = await prismaClient.supper.findFirst();
  if (!supper) {
    return null;
  }

  return { calendar, supper };
}
