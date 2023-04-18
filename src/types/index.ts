export type HeroType = {
  title: string;
  content: string;
  link?: string;
  image?: string;
  video?: string;
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
