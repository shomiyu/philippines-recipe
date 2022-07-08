import type { Recipe } from '@/api/recipe/types';
import { Header } from '@/components/common/header/Header';
import { Footer } from '@/components/common/footer/Footer';
import { RecipeDetails } from '@/components/page/Recipe/Recipe';

interface Props {
  recipe: Recipe;
}

export const RecipePage = (props: Props): JSX.Element => {
  return (
    <>
      <Header />
      <RecipeDetails {...props} />
      <Footer />
    </>
  );
};
