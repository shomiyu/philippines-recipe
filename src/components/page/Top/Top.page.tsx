import { MicroCMSListResponse } from "microcms-js-sdk";
import { Category } from "@/api/category/types";
import { Recipe } from "@/api/recipe/types";
import style from "@/components/page/Top/Top.module.scss";
import { Top } from "@/components/page/Top/Top";

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

export const TopPage = (props: Props): JSX.Element => {
  return (
    <>
      <header className={style.header}>ヘッダー</header>
      <Top {...props} />
      <footer>フッター</footer>
    </>
  );
};
