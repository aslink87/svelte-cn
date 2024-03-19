import prismaClient from '$lib/db.server';

export async function load() {
  const data = await prismaClient.pantryCalendar.findFirst();
  if (!data) {
    return null;
  }

  return data;
}
