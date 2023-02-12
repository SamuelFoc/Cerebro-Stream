import Layout from "../../../../components/Layout";
import RollerTitle from "../../../../components/RollerTitle";
import Article from "../../../../components/Article";
import {
  getAllArticlesOf,
  getPaths,
  getArticle,
} from "../../../../lib/dataFetcher";

export async function getStaticProps({ params }) {
  const articles = await getAllArticlesOf(params.subject, params.topic);

  const article = await getArticle(
    params.subject,
    params.topic,
    params.article
  );

  return {
    props: {
      actualTopic: params.topic,
      articles: articles,
      articleData: {
        path: `${params.subject} > ${params.topic} > ${params.article}`,
        subject: params.subject,
        topic: params.topic,
        article: article,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths(3);

  return {
    paths,
    fallback: false,
  };
}

export default function ArticlePage(props) {
  return (
    <Layout>
      <RollerTitle
        topic={props?.articleData?.topic}
        subject={props?.articleData?.subject}
        titleImg={`/images/${props?.actualTopic}Icon.png`}
        items={props?.articles}
      />
      <Article
        title={props?.articleData?.path}
        article={props?.articleData?.article}
      />
    </Layout>
  );
}
