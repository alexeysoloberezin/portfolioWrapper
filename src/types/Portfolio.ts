export interface PortfolioItem {
  title: string;
  subtitle: string;
  text: string;
  id?: string;
  tags?: Tags[];
  images?: string[];
  links?: {
    name: SocialLinks;
    link: string;
  }[];
  steps: CaseStep[],
  statistic?: {
    date: string;
    price: number;
    duration: number;
  },
  reviews?: Review[],
}

export interface CaseStep {
  title: string,
  content: string,
}

export interface Review {
  name: string,
  content: string,
  img?: string,
}

export enum SocialLinks {
  GitHub= "Github",
  Site= "Site",
  Swagger= "Swagger",
  Api= "Api",
  LinkedIn= "LinkedIn",
}

export enum SortBy {
  Date="Date",
  Activity="Activity"
}

export enum Tags {
  HTML = "HTML",
  Vue = "Vue",
  React = "React",
  Vite = "Vite",
  Vuex = "Vuex",
  Pinia = "Pinia",
  Firebase = "Firebase",
  JavaScript = "JavaScript",
  toHtml = "toHtml",
  TypeScript = "TypeScript",
  PrimeVue="PrimeVue",
  Eslint="Eslint",
  Prettier="Prettier",
  SCSS="SCSS/SASS",
}

export const getTags = (): {label: Tags, value: Tags}[] => Object.values(Tags).map(item => ({label: item, value: item}));
export const getLinks = (): {label: SocialLinks, value: SocialLinks}[] => Object.values(SocialLinks).map(item => ({label: item, value: item}));
export const getSortBy = (): {label: SortBy, value: SortBy}[] => Object.values(SortBy).map(item => ({label: item, value: item}));
