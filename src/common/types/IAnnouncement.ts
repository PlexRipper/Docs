import { ParsedContent } from "@nuxt/content/dist/runtime/types";

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
