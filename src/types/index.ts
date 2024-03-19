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
  links: { name: string; label: string }[];
  hero: HeroType;
  newsletters: NewsletterType[];
  calendar: CalendarType;
  needs: NeedsType;
};

export type CalendarEvent = {
  etag: string;
  description: string;
  end: {
    dateTime: string;
  };
  htmlLink: string;
  start: {
    dateTime: string;
  };
  summary: string;
  visibility: 'private' | 'public' | undefined;
  location?: string;
};

export type CalendarTheme = {
  allDay: string;
  active: string;
  bgEvent: string;
  bgEvents: string;
  body: string;
  button: string;
  buttonGroup: string;
  calendar: string;
  compact: string;
  content: string;
  day: string;
  dayHead: string;
  days: string;
  event: string;
  eventBody: string;
  eventTime: string;
  eventTitle: string;
  events: string;
  extra: string;
  handle: string;
  header: string;
  hiddenScroll: string;
  highlight: string;
  icon: string;
  line: string;
  lines: string;
  nowIndicator: string;
  otherMonth: string;
  sidebar: string;
  sidebarTitle: string;
  today: string;
  time: string;
  title: string;
  toolbar: string;
  view: string;
};

export type CalendarEventSource = {
  id: string;
  start: string;
  end: string;
  title: { html: string };
};

export type NeedsType = {
  id: string;
  item0: string | null;
  item1: string | null;
  item2: string | null;
  item3: string | null;
  item4: string | null;
  item5: string | null;
  item6: string | null;
  item7: string | null;
  item8: string | null;
  item9: string | null;
};

export type GapiType = {
  client: {
    calendar: {
      events: {
        list: unknown;
      };
    };
    init: unknown;
  };
  load: unknown;
  list: unknown;
};
