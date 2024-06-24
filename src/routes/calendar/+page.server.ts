import prismaClient from '$lib/db.server';
import { redirect } from '@sveltejs/kit';

export async function load() {
  const calendar = await prismaClient.calendar.findFirst();
  if (!calendar) {
    return null;
  }

  const supper = await prismaClient.supper.findFirst();
  if (!supper) {
    return null;
  }

  redirect(308, '/calendar');

  return { calendar, supper };
}
