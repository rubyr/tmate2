import wiki from "wikijs";

export const getRandomArticles = async (count = 1) => {
  const articles = await wiki().random(count);
  return articles;
};

export const getArticleInfo = async (page) => {
  const wPage = await wiki().page(page);
  return {
    name: page,
    description: await wPage.summary(),
    img: await wPage.mainImage(),
    url: await wPage.url(),
    tags: await (await wPage.categories()).map((c) => c.slice(9)),
  };
};
