import Layout from "../../../../components/Layout";
import RollerTitle from "../../../../components/RollerTitle";
import Article from "../../../../components/Article";
import {
  getAllArticlesOfSubjectsTopic,
  getPaths,
  getArticle,
} from "../../../../lib/dataFetcher";

export async function getStaticProps({ params }) {
  const subjectData = await getAllArticlesOfSubjectsTopic(
    params.subject,
    params.topic
  );

  const article = await getArticle(
    params.subject,
    params.topic,
    params.article
  );

  return {
    props: {
      subjectData: subjectData,
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
        titleImg={`/images/${props?.subjectData?.actualTopic}Icon.png`}
        items={props?.subjectData?.articles}
      />
      <Article
        title={props?.articleData?.path}
        article={props?.articleData?.article}
      />
    </Layout>
  );
}
