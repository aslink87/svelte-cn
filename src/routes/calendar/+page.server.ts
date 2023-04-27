import prismaClient from '$lib/db.server';

export async function load() {
  const calendar = await prismaClient.calendar.findFirst();
  if (!calendar) {
    return null;
  }
  return { calendar };
}
