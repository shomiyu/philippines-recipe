import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Top/Top.module.scss';
import Link from 'next/link';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

export const Top = ({ category, recipe }: Props): JSX.Element => {
  return (
    <>
      <h1>
        <Link href='/'>
          <a>
            <img src='/images/logo.svg' alt='フィリピンりょうりずかん' />
          </a>
        </Link>
      </h1>

      {/* 投稿recipeのサムネイルから新着順のカルーセルにする */}
      <ul>
        <li>
          <img src='/images/no_image.jpg' alt='no image' />
        </li>
        <li>
          <img src='/images/no_image.jpg' alt='no image' />
        </li>
        <li>
          <img src='/images/no_image.jpg' alt='no image' />
        </li>
      </ul>

      <p>
        フィリピンりょうりずかんは、フィリピンの家庭料理を誰でも簡単に作れるようにまとめたレシピ集です。
      </p>
      <p>
        日本にある材料で作るので現地より親みやすい味になっていますが、家庭によって材料や味付けが大きく変わってきます。あなたの知っているフィリピン料理はありますか？
      </p>
      <div>
        {recipe.contents.length < 1 ? (
          <p>投稿がありません</p>
        ) : (
          <div>
            {/* カテゴリ */}
            <ul className={style.list}>
              {category.contents.map((cat) => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul>

            {/* レシピカード */}
            <ul>
              {recipe.contents.map((recipe) => (
                <li key={recipe.id}>
                  <Link href={'/recipe/' + recipe.id}>
                    <a>
                      <div>
                        <figure>
                          {recipe.thumbnail ? (
                            <img src={recipe.thumbnail?.url} alt='' />
                          ) : (
                            <img src='/images/no_image.jpg' alt='no image' />
                          )}
                        </figure>

                        {recipe.level && <p>{recipe.level}</p>}

                        <p>{recipe.title}</p>
                        <p lang='tl'>{recipe.tagalog}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
