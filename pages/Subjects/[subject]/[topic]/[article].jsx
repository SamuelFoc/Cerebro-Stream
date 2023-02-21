import Layout from "../../../../components/Layout";
import RollerTitle from "../../../../components/RollerTitle";
import Article from "../../../../components/Article";
import {
  getAllArticlesOf,
  getPaths,
  getArticle,
} from "../../../../lib/dataFetcher";
import NextPrev from "../../../../components/NextPrev";

export async function getStaticProps({ params }) {
  const articles = await getAllArticlesOf(params.subject, params.topic);

  const { article, info } = await getArticle(
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
        info: info,
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
      <NextPrev
        prev={props?.articleData?.info?.prev}
        next={props?.articleData?.info?.next}
      />
    </Layout>
  );
}
