import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Top/Top.module.scss';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

export const Top = (props: Props): JSX.Element => {
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
