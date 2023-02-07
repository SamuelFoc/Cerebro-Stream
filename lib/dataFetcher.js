import fs from "fs";
import path from "path";
import md from "markdown-it";
import mdt from "markdown-it-texmath";

const dbDirectory = path.join(process.cwd(), "data");

// !COMMENTATION
// getAllSubjects returns an array of all Subjects and associated data.
// Structure of array item is following:
// {
//   subject: Physics,
//   parsedData: (Content of Physics.json)
// }
export const getAllSubjects = async () => {
  const fileNames = fs.readdirSync(dbDirectory);

  const subjects = fileNames.map((fileName) => {
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
  });

  return subjects;
};

export const getAllArticlesOfSubjectsTopic = async (subject, topic) => {
  // Get file content
  const fullPath = path.join(dbDirectory, subject + ".json");
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const parsedData = JSON.parse(fileContent);

  // Get all topics
  const [choosenTopic] = parsedData?.GridTag?.Topics.filter(
    (item) => item.title.toLowerCase().replace(" ", "") === topic.toLowerCase()
  );

  const articles = choosenTopic?.articles;

  return {
    subject: subject,
    topics: parsedData?.GridTag?.Topics,
    actualTopic: topic,
    articles: articles,
  };
};

export const getArticle = async (subject, topic, article) => {
  // Get file content
  const fullPath = path.join(dbDirectory, subject + ".json");
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  // Create promise to parse data first
  const parseData = new Promise((resolve) => {
    resolve(JSON.parse(fileContent));
  });

  const articlePath = await parseData
    .then((parsedData) => {
      const topics = parsedData.GridTag.Topics;
      return topics;
    })
    .then(async (topics) => {
      const [myTopic] = await topics.filter(
        (tpc) =>
          tpc.title.toLowerCase().replace(" ", "") === topic.toLowerCase()
      );
      return myTopic.articles;
    })
    .then(async (articles) => {
      const [myArticle] = await articles.filter(
        (artcl) =>
          artcl.title.replace(" ", "").toLowerCase() === article.toLowerCase()
      );
      const path =
        "/Articles/" + myArticle.directUrl.split("/").slice(2).join("/");
      return path;
    });

  const fullArticlePath = path.join(process.cwd(), articlePath + ".md");
  const articleTextMD = fs.readFileSync(fullArticlePath, "utf-8");

  const articleHTML = md({ html: true })
    .use(mdt, {
      engine: require("katex"),
      delimiters: "dollars",
      katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
    })
    .render(articleTextMD);
  return articleHTML;
};

const getAllSubjectsAsync = (baseDir) => {
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
      artcle.title.replace(" ", "").toLowerCase() === article.toLowerCase()
  );
  return choosenArticle;
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
              article: article.title.replace(" ", ""),
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
