import React from 'react';
import type { Recipe } from '@/api/recipe/types';
import { Card } from '@/components/domain/Card';
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
  recipePostsArray: RecipePosts[];
  tabId: string;
  onChangeTabId: (tabId: string) => void;
}

export const TabPanel = ({ recipePostsArray, tabId }: Props): JSX.Element => {
  return (
    <>
      <div className={style.wrapper}>
        <h2 className='visuallyHidden'>レシピ一覧</h2>
        {recipePostsArray.map((recipe, index) => (
          <div
            id={`panel-${recipe.id}`}
            className={`${style.panel} ${
              tabId === `panel-${recipe.id}` ? style.isShow : ''
            }`}
            role='tabpanel'
            aria-hidden={tabId !== `panel-${recipe.id}`}
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
    </>
  );
};
