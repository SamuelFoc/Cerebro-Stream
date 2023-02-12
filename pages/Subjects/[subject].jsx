import Layout from "../../components/Layout";
import TitleTag from "../../components/TitleTag";
import GridContainer from "../../components/GridContainer";
import Error from "../../components/Error";
import { getOneSubject } from "../../lib/dataFetcher";
import { getPaths } from "../../lib/dataFetcher";

export async function getStaticProps({ params }) {
  try {
    const subjectData = await getOneSubject(params.subject);
    return {
      props: { subjectData },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  const paths = await getPaths(1);
  return {
    paths,
    fallback: false,
  };
}

export default function Subject({ subjectData }) {
  return !subjectData ? (
    <Error />
  ) : (
    <Layout>
      <TitleTag
        title={subjectData?.SubjectBanner?.title}
        src={subjectData?.SubjectBanner?.image}
        text={subjectData?.SubjectBanner?.text}
      />
      <GridContainer
        baseUrl={subjectData?.Subject}
        gridTitle={subjectData?.GridTag?.gridTitle}
        items={subjectData?.GridTag?.Topics}
      />
    </Layout>
  );
}
