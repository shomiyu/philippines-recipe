import type { Recipe } from '@/api/recipe/types';
import { StarRate } from '@/components/common/StarRate/StarRate';
import { Note } from '@/components/domain/recipe/Note';
import { StepList } from '@/components/domain/recipe/StepList';
import style from '@/components/page/Recipe/Recipe.module.scss';
import cx from 'classnames';

interface Props {
  recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: Props): JSX.Element => {
  return (
    <main>
      <figure className={style.mainVisual}>
        {recipe.thumbnail?.url ? (
          <img src={recipe.thumbnail?.url} alt='' width='1440' height='436' />
        ) : (
          <img src='/images/no_image.jpg' alt='' width='1440' height='436' />
        )}
      </figure>

      <section className={style.introductionSection}>
        <div className={style.container}>
          <h1 className={style.title}>
            <span lang='ja'>{recipe.title}</span>
            <span lang='tl'>{recipe.tagalog}</span>
          </h1>

          {(!!recipe.level.length || recipe.time) && (
            <div className={style.metaData}>
              {recipe.level.length >= 1 && (
                <div className={style.level}>
                  <span className='visuallyHidden'>難易度</span>
                  <StarRate level={recipe.level[0]} />
                </div>
              )}
              {typeof recipe.time === 'string' && (
                <p className={style.timeWrapper}>
                  <span className='visuallyHidden'>所要時間</span>
                  <img
                    src='/images/icon_hourglass.svg'
                    alt=''
                    width='24'
                    height='24'
                  />
                  <span className={style.time}>{recipe.time}</span>
                </p>
              )}
            </div>
          )}

          {recipe.introduction && (
            <p className={style.introduction}>{recipe.introduction}</p>
          )}

          {(recipe.materialList?.length ?? 0) >= 1 && (
            <Note
              serving={recipe.serving}
              materialList={recipe.materialList}
              point={recipe.point}
            />
          )}
        </div>
      </section>

      <section className={style.cookingSection}>
        <div className={cx(style.container, style.cookingContainer)}>
          <h2 className={style.primaryHeading}>how to cook</h2>
          <StepList step={recipe.step ?? []} />
          {recipe.eating && (
            <div className={style.tapeNote}>
              <p className={style.eatingTextBox}>
                <span className={style.eatingText}>{recipe.eating}</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {recipe.comment && (
        <section
          className={cx(
            style.commentSection,
            recipe.eating ? style.hasSpace : '',
          )}
        >
          <div className={style.container}>
            <h2 className={style.primaryHeading}>comment</h2>
            <p className={style.comment}>{recipe.comment}</p>
          </div>
        </section>
      )}
    </main>
  );
};
