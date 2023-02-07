import Layout from "../../../components/Layout";
import GridContainer from "../../../components/GridContainer";
import RollerTitle from "../../../components/RollerTitle";
import {
  getAllArticlesOfSubjectsTopic,
  getPaths,
} from "../../../lib/dataFetcher";

export async function getStaticProps({ params }) {
  const subjectData = await getAllArticlesOfSubjectsTopic(
    params.subject,
    params.topic
  );
  return {
    props: { subjectData },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths(2);

  return {
    paths,
    fallback: false,
  };
}

export default function Topic({ subjectData }) {
  return (
    <Layout>
      <RollerTitle
        subject={subjectData?.subject}
        titleImg={`/images/${subjectData?.actualTopic}Icon.png`}
        items={subjectData?.topics}
      />
      <GridContainer
        gridTitle={subjectData?.actualTopic}
        items={subjectData?.articles}
      />
    </Layout>
  );
}
