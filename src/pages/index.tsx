import { GetStaticProps, NextPage } from "next";
import { apiClient } from "@/utils/apiClient";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Category } from "@/api/category/types";
import { Recipe } from "@/api/recipe/types";
import style from "@/styles/Home.module.scss";

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

const Home: NextPage<Props> = (props: Props) => {
  const { category, recipe } = props;

  return (
    <>
      <ul className={style.list}>
        {category.contents.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <ul>
        {recipe.contents.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
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

export default Home;
