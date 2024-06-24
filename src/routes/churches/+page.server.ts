import prismaClient from '$lib/db.server';

export const ssr = false;

export async function load() {
  const data = await prismaClient.pantryCalendar.findFirst();
  if (!data) {
    return null;
  }

  return data;
}
