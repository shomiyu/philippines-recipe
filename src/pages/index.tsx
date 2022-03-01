import { GetStaticProps, NextPage } from "next";
import { apiClient } from "@/utils/apiClient";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Category } from "@/api/category/types";
import { Recipe } from "@/api/recipe/types";
import { TopPage } from "@/components/page/Top";

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

const Top: NextPage<Props> = (props: Props) => {
  return (
    <>
      <TopPage {...props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const category = await apiClient.category.$get();
  const recipe = await apiClient.recipe.$get();

  return {
    props: {
      category: category,
      recipe: recipe,
    },
  };
};

export default Top;
