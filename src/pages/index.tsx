import { apiClient } from "@/utils/apiClient";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Category } from "@/api/category/types";
import { GetStaticProps, NextPage } from "next";

interface Props {
  category: MicroCMSListResponse<Category>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { category } = props;

  return (
    <>
      <ul>
        {category.contents.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const data = await apiClient.category.$get();

  return {
    props: {
      category: data,
    },
  };
};

export default Home;
