import wiki from "wikijs";
import { Thing } from "./types";

export const getRandomArticles = async (count = 1) => {
  const articles = await wiki().random(count);
  return articles;
};

export const getArticleInfo = async (page: string): Promise<Thing> => {
  const wPage = await wiki().page(page);
  const desc = await wPage.summary();
  const description = (desc.length > 100
    ? desc.split(".").slice(0, 2).join(".")
    : desc
  ).slice(0, 200);
  const data = {
    name: page,
    description: description + (description.endsWith(".") ? "" : "."),
    img: await wPage.mainImage(),
    url: wPage.url(),
    tags: (await wPage.categories()).map((c) => c.slice(9)),
  };

  return data;
};
