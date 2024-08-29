import type { ParsedContent } from '@nuxt/content';

export interface IAnnouncement extends ParsedContent {
  description: string;
  date: string;
  authors: IAuthor[] | undefined;
}

export interface IAuthor {
  name: string;
  avatarUrl: string;
  link: string;
}
