import { useState } from 'react';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { Category } from '@/api/category/types';
import type { Recipe } from '@/api/recipe/types';
import style from '@/components/page/Top/Top.module.scss';
import Link from 'next/link';
import { Tab } from '@/components/domain/top/Tab';
import { TabPanel } from '@/components/domain/top/TabPanel';
import { useCallback } from 'react';

interface Props {
  category: MicroCMSListResponse<Category>;
  recipe: MicroCMSListResponse<Recipe>;
}

export const Top = ({ category, recipe }: Props): JSX.Element => {
  const recipePosts = category.contents.map((category) => {
    if (category.id !== 'all') {
      return {
        id: category.id,
        contents: recipe.contents.filter(
          (data) => data.category?.id === category.id,
        ),
      };
    } else {
      return {
        id: category.id,
        contents: recipe.contents,
      };
    }
  });

  const [selectedTabId, setTabId] = useState('panel-all');

  const handleChangeTabId = useCallback((nextTabId: string) => {
    setTabId(nextTabId);
  }, []);

  return (
    <main>
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
              <Tab
                category={category}
                selectedTabId={selectedTabId}
                onChangeTabId={handleChangeTabId}
              />
            )}

            <TabPanel
              recipePosts={recipePosts}
              selectedTabId={selectedTabId}
              onChangeTabId={handleChangeTabId}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
