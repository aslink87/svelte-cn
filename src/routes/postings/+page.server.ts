import type { PostingType } from '$/types';
import prismaClient from '$lib/db.server';

export async function load() {
  const posting: PostingType | null = await prismaClient.posting.findFirst();
  if (!posting) {
    return undefined;
  }
  return { posting };
}
