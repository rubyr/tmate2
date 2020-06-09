import wiki from "wikijs";
import { Thing } from "./types";

export const getRandomArticles = async (count = 1) => {
  const articles = await wiki().random(count);
  return articles;
};

export const getArticleInfo = async (page: string): Promise<Thing> => {
  const wPage = await wiki().page(page);
  const desc = await wPage.summary();
  const description =
    desc.slice(0, 200) === desc ? desc : desc.slice(0, 200).trim() + "...";
  const data = {
    name: page,
    description,
    img: await wPage.mainImage(),
    url: wPage.url(),
    tags: (await wPage.categories()).map((c) => c.slice(9)),
  };

  return data;
};
