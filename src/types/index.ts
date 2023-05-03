export type HeroType = {
  title: string;
  content: string;
  link?: string;
  image?: string;
  video?: string;
  doc?: string;
};

export type AboutPageMissionDataType = {
  title: string;
  subtitle: string;
  list1: string[];
  list2: string[];
};

interface IItems {
  title: string;
  content: string;
}

export type AboutPageFiveCsType = {
  title: string;
  items: IItems[];
};

interface IName {
  title: string;
  name: string;
}

export type AboutPageLeadershipType = {
  board: IName[];
  resourceDevelopment: { name: string }[];
  financeTeam: { name: string }[];
};

export type AboutPageStaffType = {
  img: string;
  name: string;
  title: string;
  content: string;
  email?: string;
  ext?: number;
};

export type NewsletterType = {
  date: string;
  title: string;
  doc: string;
  index: number;
};

export type CalendarType = {
  img?: string;
  alt?: string;
  content: string;
  link?: string;
};

export type BlogType = {
  author: string;
  date: string;
  title: string;
  content: string;
  img?: string;
  caption?: string;
};

export type AdminPageType = {
  users: {
    id: string;
    name: string;
    settings: { approved: boolean };
  }[];
  links: string[];
};
