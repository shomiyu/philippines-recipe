import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Recipe/Recipe.module.scss';

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

          {((recipe.level?.length ?? 0) >= 1 || recipe.time) && (
            <div className={style.metaData}>
              <p className={style.level}>
                <span className='visuallyHidden'>難易度</span>
                {recipe.level}
              </p>
              {recipe.time && (
                <p>
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
            <div className={style.note}>
              <section>
                <div>
                  <h2 className={style.noteTitle}>
                    材料
                    <span className={style.serving}>
                      （{recipe.serving}人分）
                    </span>
                  </h2>
                  <dl className={style.materialList}>
                    {recipe.materialList?.map((item, index) => (
                      <div key={index} className={style.materialListItem}>
                        <dt className={style.materialListTitle}>{item.name}</dt>
                        <dd className={style.materialListAmount}>
                          {item.quantity}
                        </dd>
                      </div>
                    ))}
                    {(recipe.materialList?.length ?? 0) % 2 == 0 && (
                      <div className={style.materialListItem}>
                        <dt></dt>
                        <dd></dd>
                      </div>
                    )}
                  </dl>
                  {recipe.point && (
                    <p className={style.point}>{recipe.point}</p>
                  )}
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
