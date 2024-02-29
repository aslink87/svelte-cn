import fs from 'fs/promises';
import path from 'path';
import { error, type RequestEvent } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';
import type { BlogType, CalendarType, HeroType, NeedsType, NewsletterType } from '$/types';
import type { Actions } from './$types';

export async function load() {
  const users = await prismaClient.user.findMany({
    include: { settings: true },
  });

  const links = [
    'admins',
    'frontpage',
    'newsletters',
    'calendar',
    'blog',
    'supper',
    'pantryneeds',
    'pantrycalendar',
  ];

  let hero: HeroType = { title: 'Not found', content: 'Not found' };

  const heroData = await prismaClient.hero.findUnique({
    where: {
      id: '9d5a8c19-6464-4763-b532-2817c4bb2033',
    },
  });

  if (heroData) {
    hero = heroData as HeroType;
  }

  let calendar: CalendarType = { content: 'Not found' };
  const calendarData = await prismaClient.calendar.findFirst();

  if (calendarData) {
    calendar = calendarData as CalendarType;
  }

  let needs: NeedsType = {
    id: '',
    item0: '',
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
  };
  const needsData = await prismaClient.needs.findFirst();
  if (needsData) {
    needs = needsData;
  }

  if (users) {
    return {
      users,
      links,
      hero,
      calendar,
      needs,
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw error(404, 'error');
}

export const actions = {
  hero: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
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
        `${crypto.randomUUID()}.${(doc as Blob).type.split('/')[1]}`,
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
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`,
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

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
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
          `${crypto.randomUUID()}.${(docFile as Blob).type.split('/')[1]}`,
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

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
    }
  },

  calendar: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData: CalendarType = {
      content: data.get('content')?.toString().trim() ?? '',
      img: '',
      alt: data.get('alt')?.toString().trim() ?? '',
      link: data.get('link')?.toString().trim() ?? '',
    };

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
        'calendar',
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`,
      );
      await fs.writeFile(filePath, Buffer.from(await (image as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.img = trimmedFilePath;
    }

    try {
      await prismaClient.calendar.update({
        where: { id: '20245a5d-5f5f-4518-8c43-d8e39adcfd6f' },
        data: submitData,
      });

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
    }
  },

  blog: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData: BlogType = {
      author: data.get('author')?.toString().trim() ?? '',
      date: data.get('date')?.toString().trim() ?? '',
      title: data.get('title')?.toString().trim() ?? '',
      content: data.get('content')?.toString().trim() ?? '',
      img: '',
      caption: data.get('alt')?.toString().trim() ?? '',
    };

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
        'blog',
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`,
      );
      await fs.writeFile(filePath, Buffer.from(await (image as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.img = trimmedFilePath;
    }

    try {
      await prismaClient.blog.create({
        data: submitData,
      });

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
    }
  },

  supper: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData = {
      img: '',
      alt: data.get('alt')?.toString().trim() ?? '',
    };
    // if doc is submitted, verify type, save it to the server, and add the path to the database
    const submittedImage: File | null = data.get('image') as File;
    if (
      submittedImage &&
      (submittedImage.type === 'image/jpeg' || submittedImage.type === 'image/png')
    ) {
      const image: File = submittedImage;
      const filePath = path.join(
        process.cwd(),
        'uploads',
        'supper',
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`,
      );
      await fs.writeFile(filePath, Buffer.from(await (image as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.img = trimmedFilePath;
    }

    try {
      await prismaClient.supper.update({
        where: { id: 'f943f27c-cd19-43cf-be82-a1fcc0350d24' },
        data: submitData,
      });

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
    }
  },

  needs: async ({ request }: RequestEvent) => {
    const data = await request.formData();

    const submitData = {
      item0: data.get('item0')?.toString().trim() ?? '',
      item1: data.get('item1')?.toString().trim() ?? '',
      item2: data.get('item2')?.toString().trim() ?? '',
      item3: data.get('item3')?.toString().trim() ?? '',
      item4: data.get('item4')?.toString().trim() ?? '',
      item5: data.get('item5')?.toString().trim() ?? '',
      item6: data.get('item6')?.toString().trim() ?? '',
      item7: data.get('item7')?.toString().trim() ?? '',
      item8: data.get('item8')?.toString().trim() ?? '',
      item9: data.get('item9')?.toString().trim() ?? '',
    };

    try {
      await prismaClient.needs.update({
        where: { id: 'e82e4928-142e-4000-b4f8-a04c8643a9cd' },
        data: submitData,
      });

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: true };
    }
  },

  pantrycalendar: async ({ request }: RequestEvent) => {
    const data = await request.formData();
    const submitData = {
      img: '',
    };
    // if doc is submitted, verify type, save it to the server, and add the path to the database
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
        'pantrycalendar',
        `${crypto.randomUUID()}.${(image as Blob).type.split('/')[1]}`,
      );
      await fs.writeFile(filePath, Buffer.from(await (image as Blob).arrayBuffer()));
      const trimmedFilePath = filePath.replace(process.cwd(), '').replace('/static', '');
      submitData.img = trimmedFilePath;
    }

    try {
      await prismaClient.pantryCalendar.update({
        where: { id: '1925576b-6fde-44f7-8201-76b1ccdfe2f7' },
        data: submitData,
      });

      return { success: true };

      // eslint-disable-next-line
    } catch (e: any) {
      const env: string = import.meta.env.MODE;
      // eslint-disable-next-line no-console
      if (env === 'development') console.log(e.message);
      return { success: false };
    }
  },
} satisfies Actions;
