import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Top/Top.module.scss';
import Link from 'next/link';
import { Card } from '@/components/domain/Card';

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
            <img
              src='/images/logo.svg'
              alt='フィリピンりょうりずかん'
              width='418'
              height='192'
            />
          </a>
        </Link>
      </h1>

      {/* 投稿recipeのサムネイルから新着順のカルーセルにする */}
      <div className={style.slider}>
        <ul className={style.sliderList}>
          <li className={style.sliderItem}>
            <img
              src='/images/no_image.jpg'
              alt='no image'
              width='1200'
              height='600'
            />
          </li>
          <li>
            <img
              src='/images/no_image.jpg'
              alt='no image'
              width='1200'
              height='600'
            />
          </li>
          <li>
            <img
              src='/images/no_image.jpg'
              alt='no image'
              width='1200'
              height='600'
            />
          </li>
        </ul>
      </div>

      <div className={style.introduction}>
        <div className='containerLarge'>
          <p>
            フィリピンりょうりずかんは、フィリピンの家庭料理を誰でも簡単に作れるようにまとめたレシピ集です。
          </p>
          <p>
            日本にある材料で作るので現地より親みやすい味になっていますが、家庭によって材料や味付けが大きく変わってきます。あなたの知っているフィリピン料理はありますか？
          </p>
        </div>
      </div>

      <section className='sectionPrimary'>
        <div className='containerLarge'>
          <div className={style.contentsWrapper}>
            {recipe.contents.length > 0 && (
              <ul className={style.tab}>
                {category.contents.map((cat) => (
                  <li
                    key={cat.id}
                    className={`${style.tabItem} ${style.isActive}`}
                  >
                    <Link href='/'>
                      <a className={style.tabLink}>{cat.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className={style.cardListWrapper}>
              <h2 className='visuallyHidden'>レシピ一覧</h2>
              {recipe.contents.length < 1 ? (
                <p>投稿がありません</p>
              ) : (
                <ul className={style.cardList}>
                  {recipe.contents.map((recipe) => (
                    <li key={recipe.id} className={style.card}>
                      <Card
                        id={recipe.id}
                        title={recipe.title}
                        tagalog={recipe.tagalog}
                        thumbnail={recipe.thumbnail}
                        level={recipe.level}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
