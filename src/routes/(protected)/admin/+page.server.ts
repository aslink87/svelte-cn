import { error, type RequestEvent } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';
import fs from 'fs/promises';
import path from 'path';
import type { HeroType } from '$/types';

export async function load() {
  const users = await prismaClient.user.findMany({
    include: { settings: true },
  });

  const links = ['frontpage', 'admins'];
  if (users) {
    return {
      users,
      links,
    };
  }
  throw error(404, 'error');
}

// TODO: return form status to client to provide feedback to user - perhaps use a store variable
export const actions = {
  hero: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData: HeroType = {
      title: data.get('title')?.toString() ?? '',
      content: data.get('content')?.toString() ?? '',
      link: data.get('link')?.toString() ?? '',
      image: data.get('image')?.toString() ?? '',
      video: data.get('video')?.toString() ?? '',
      doc: '',
    };

    // if doc is submitted, verify type, save it to the server, and add the path to the database
    const submittedDoc: File | null = data.get('doc') as File;
    if (submittedDoc && submittedDoc.type === 'application/pdf') {
      const doc: File = data.get('doc') as File;
      const filePath = path.join(
        process.cwd(),
        'static',
        'uploads',
        'hero',
        `${crypto.randomUUID()}.${(doc as Blob).type.split('/')[1]}`
      );
      await fs.writeFile(filePath, Buffer.from(await (doc as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '');
      submitData.doc = trimmedFilePath;
    }

    try {
      await prismaClient.hero.update({
        where: { id: '9d5a8c19-6464-4763-b532-2817c4bb2033' },
        data: submitData,
      });

      return { message: 'success' };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { message: 'failed' };
    }
  },
};
