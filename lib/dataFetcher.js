import fs from "fs";
import path from "path";
import { unified } from "unified";
import parse from "remark-parse";
import math from "remark-math";
import katex from "rehype-katex";
import remark2rehype from "remark-rehype";
import highlight from "rehype-highlight";
import html from "rehype-stringify";

const dbDirectory = path.join(process.cwd(), "data");
let processor = unified()
  .use(parse)
  .use(math)
  .use(remark2rehype)
  .use(katex)
  .use(highlight)
  .use(html);

export const getAllSubjectsAsync = (baseDir) => {
  const fileNames = fs.readdirSync(baseDir);

  return new Promise((resolve, reject) => {
    resolve(
      fileNames.map((fileName) => {
        // Get subjects names
        const subject = fileName.replace(/\.json$/, "");

        // Get file content
        const fullPath = path.join(dbDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const parsedData = JSON.parse(fileContent);

        return {
          subject,
          ...parsedData,
        };
      })
    );
    reject([]);
  });
};

// * COMMENT
// * returns [string, string, ...]
export const getAllSubjectNames = () => {
  const fileNames = fs.readdirSync(dbDirectory);

  return new Promise((resolve, reject) => {
    resolve(fileNames.map((fileName) => fileName.replace(/\.json$/, "")));
    reject([]);
  });
};

// * COMMENT
// * returns obj{parsedData}
export const getOneSubject = async (name) => {
  // Get file content
  const fullPath = path.join(dbDirectory, name + ".json");
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const parsedData = JSON.parse(fileContent);

  return {
    ...parsedData,
  };
};

// * COMMENT
// * returns [obj., obj., ...]
export const getAllTopicsOf = async (name) => {
  const subject = await getOneSubject(name);

  return subject?.GridTag?.Topics;
};

// * COMMENT
// * returns [obj., obj., ...]
export const getAllArticlesOf = async (subject, topic) => {
  const topics = await getAllTopicsOf(subject);
  const [choosenTopic] = await topics.filter(
    (tpc) => tpc.title.replace(" ", "").toLowerCase() === topic.toLowerCase()
  );
  return choosenTopic?.articles;
};

// * COMMENT
// * return obj.{}
export const getOneArticleFrom = async (subject, topic, article) => {
  const articles = await getAllArticlesOf(subject, topic);
  const [choosenArticle] = await articles.filter(
    (artcle) =>
      artcle.directUrl.split("/").pop().toLowerCase() === article.toLowerCase()
  );
  return choosenArticle;
};

// * COMMENT
// * returns parsed article text
export const getArticle = async (subject, topic, article) => {
  const { directUrl } = await getOneArticleFrom(subject, topic, article);
  const articlePath = "/Articles/" + directUrl.split("/").slice(2).join("/");

  const fullArticlePath = path.join(process.cwd(), articlePath + ".md");
  const articleTextMD = fs.readFileSync(fullArticlePath, "utf-8");
  const output = await processor.process(articleTextMD);
  return output.value;
};

// * COMMENT
// * returns paths for different nest depth
export const getPaths = async (depth) => {
  const subjects = await getAllSubjectNames(dbDirectory);

  // Paths for Nesting depth === 1
  if (depth === 1) {
    return subjects.map((subject) => {
      return {
        params: {
          subject: subject.replace(" ", ""),
        },
      };
    });
  }

  // Paths for Nesting depth === 2
  const topicsPromises = subjects.map(async (subject) => {
    const topics = await getAllTopicsOf(subject);
    return {
      subject: subject,
      topics: topics ? topics : [],
    };
  });
  const allTopics = await Promise.all(topicsPromises);

  let paths2 = [];
  let paths3 = [];
  for (let subject of allTopics) {
    for (let topic of subject.topics) {
      paths2.push({
        params: {
          subject: subject.subject.replace(" ", ""),
          topic: topic.title.replace(" ", ""),
        },
      });
      if (topic.articles) {
        for (let article of topic.articles) {
          paths3.push({
            params: {
              subject: subject.subject.replace(" ", ""),
              topic: topic.title.replace(" ", ""),
              article: article.directUrl.split("/").pop(),
            },
          });
        }
      }
    }
  }
  if (depth === 2) {
    return paths2;
  }

  if (depth === 3) {
    return paths3;
  }
};
