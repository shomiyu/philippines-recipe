import React from 'react';
import type { Recipe } from '@/api/recipe/types';
import { Card } from '@/components/domain/top/Card';
import style from './TabPanel.module.scss';

interface RecipePost extends Recipe {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface RecipePosts {
  id: string;
  contents: RecipePost[] | [];
}

interface Props {
  recipePosts: RecipePosts[];
  selectedTabId: string;
  onChangeTabId: (selectedTabId: string) => void;
}

export const TabPanel = ({
  recipePosts,
  selectedTabId,
}: Props): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <h2 className='visuallyHidden'>レシピ一覧</h2>
      {recipePosts.map((recipe, index) => (
        <div
          id={`panel-${recipe.id}`}
          className={`${style.panel} ${
            selectedTabId === `panel-${recipe.id}` ? style.isShow : ''
          }`}
          role='tabpanel'
          aria-hidden={selectedTabId !== `panel-${recipe.id}`}
          key={index}
        >
          {recipe.contents.length < 1 ? (
            <p>準備中です！</p>
          ) : (
            <ul className={style.list}>
              {recipe.contents.map((post) => (
                <li key={post.id} className={style.item}>
                  <Card
                    id={post.id}
                    title={post.title}
                    tagalog={post.tagalog}
                    thumbnail={post.thumbnail}
                    level={post.level}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
