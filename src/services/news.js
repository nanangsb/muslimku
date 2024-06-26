import { useQuery } from "react-query";

const rssPaths = [
  "",
];

const useNews = () => {
  return useQuery(["news"], async () => {
    const publishersPromises = rssPaths.map((rssPath) =>
      fetch(rssPath)
        .then((res) => res.json())
        .then((res) => res.data)
    );
    const publishers = await Promise.all(publishersPromises);
    const refactoredStructure = publishers
      .flatMap(({ posts, ...publisher }) => {
        return posts.map((post) => {
          return {
            ...post,
            publisher: publisher,
          };
        });
      })
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    return refactoredStructure;
  });
};

export { useNews };
