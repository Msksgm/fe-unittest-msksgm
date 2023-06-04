import type { Article, ArticleInput, Articles, Profile } from "./type";

export const getMyProfile = (): Promise<Profile> => {
  return fetch("https://myapi.testing.com/my/profile").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
};

export const getMyArticles = (): Promise<Articles> => {
  return fetch("https://myapi.testing.com/my/articles").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
};

export const postMyArticle = (input: ArticleInput): Promise<Article> => {
  return fetch("https://myapi.testing.com//my/articles", {
    method: "POST",
    body: JSON.stringify(input),
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
};
