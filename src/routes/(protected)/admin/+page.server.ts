import { error, type RequestEvent } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';
import fs from 'fs/promises';
import path from 'path';
import type { HeroType, NewsletterType } from '$/types';

export async function load() {
  const users = await prismaClient.user.findMany({
    include: { settings: true },
  });

  const links = ['frontpage', 'admins', 'newsletters'];
  if (users) {
    return {
      users,
      links,
    };
  }
  throw error(404, 'error');
}

export const actions = {
  hero: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData: HeroType = {
      title: data.get('title')?.toString().trim() ?? '',
      content: data.get('content')?.toString().trim() ?? '',
      link: data.get('link')?.toString().trim() ?? '',
      image: '',
      video: data.get('video')?.toString().trim() ?? '',
      doc: '',
    };

    // if doc is submitted, verify type, save it to the server, and add the path to the database
    const submittedDoc: File | null = data.get('doc') as File;
    if (submittedDoc && submittedDoc.type === 'application/pdf') {
      const doc: File = submittedDoc;
      const filePath = path.join(
        process.cwd(),
        'static',
        'uploads',
        'hero',
        `${crypto.randomUUID()}.${(doc as Blob).type.split('/')[1]}`
      );
      await fs.writeFile(filePath, Buffer.from(await (doc as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.doc = trimmedFilePath;
    }

    const submittedImage: File | null = data.get('image') as File;
    if (
      submittedImage &&
      (submittedImage.type === 'image/jpeg' || submittedImage.type === 'image/png')
    ) {
      const image: File = submittedImage;
      const filePath = path.join(
        process.cwd(),
        'static',
        'uploads',
        'hero',
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`
      );
      await fs.writeFile(filePath, Buffer.from(await (image as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.image = trimmedFilePath;
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

  newsletters: async ({ request }: RequestEvent) => {
    const data = await request.formData();

    async function storeDoc(doc: File, name: NewsletterType) {
      if (doc && doc.type === 'application/pdf') {
        const docFile: File = doc;
        const filePath = path.join(
          process.cwd(),
          'static',
          'uploads',
          'newsletters',
          `${crypto.randomUUID()}.${(docFile as Blob).type.split('/')[1]}`
        );
        await fs.writeFile(filePath, Buffer.from(await (docFile as Blob).arrayBuffer()));
        const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
        name.doc = trimmedFilePath;
      }
    }

    // submit first newsletter
    const newsletter1: NewsletterType = {
      title: data.get('title1')?.toString().trim() ?? '',
      doc: '',
      index: 0,
    };
    const submittedDoc1: File | null = data.get('doc1') as File;
    await storeDoc(submittedDoc1, newsletter1);

    // submit second newsletter
    const newsletter2: NewsletterType = {
      title: data.get('title2')?.toString().trim() ?? '',
      doc: '',
      index: 1,
    };
    const submittedDoc2: File | null = data.get('doc2') as File;
    await storeDoc(submittedDoc2, newsletter2);

    // submit third newsletter
    const newsletter3: NewsletterType = {
      title: data.get('title3')?.toString().trim() ?? '',
      doc: '',
      index: 2,
    };
    const submittedDoc3: File | null = data.get('doc3') as File;
    await storeDoc(submittedDoc3, newsletter3);

    try {
      await prismaClient.newsletter.update({
        where: { index: 0 },
        data: newsletter1,
      });
      await prismaClient.newsletter.update({
        where: { index: 1 },
        data: newsletter2,
      });
      await prismaClient.newsletter.update({
        where: { index: 2 },
        data: newsletter3,
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
