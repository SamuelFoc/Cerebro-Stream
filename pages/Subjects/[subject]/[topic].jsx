import Layout from "../../../components/Layout";
import GridContainer from "../../../components/GridContainer";
import RollerTitle from "../../../components/RollerTitle";
import {
  getAllTopicsOf,
  getAllArticlesOf,
  getPaths,
} from "../../../lib/dataFetcher";

export async function getStaticProps({ params }) {
  const articles = await getAllArticlesOf(params.subject, params.topic);
  const topics = await getAllTopicsOf(params.subject);

  return {
    props: {
      subject: params.subject,
      actualTopic: params.topic,
      articles: articles,
      topics: topics,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths(2);

  return {
    paths,
    fallback: false,
  };
}

export default function Topic(props) {
  return (
    <Layout>
      <RollerTitle
        subject={props?.subject}
        titleImg={`/images/${props?.actualTopic}Icon.png`}
        items={props?.topics}
      />
      <GridContainer gridTitle={props?.actualTopic} items={props?.articles} />
    </Layout>
  );
}
