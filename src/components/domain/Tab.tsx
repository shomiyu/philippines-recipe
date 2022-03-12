import React, { useCallback } from 'react';
import type { Category } from '@/api/category/types';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import style from './Tab.module.scss';

interface Props {
  category: MicroCMSListResponse<Category>;
  tabId: string;
  onChangeTabId: (tabId: string) => void;
}

export const Tab = ({ category, tabId, onChangeTabId }: Props): JSX.Element => {
  const handleChangeTabId = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const nextTabId = e.currentTarget.getAttribute('aria-controls') ?? '';
      onChangeTabId(nextTabId);
    },
    [onChangeTabId],
  );

  return (
    <>
      <ul className={style.list}>
        {category.contents.map((cat) => (
          <li
            key={cat.id}
            className={`${style.item} ${
              tabId === `panel-${cat.id}` ? style.isActive : ''
            }`}
          >
            <button
              type='button'
              className={`${style.button} ${
                tabId === `panel-${cat.id}` ? style.isActive : ''
              }`}
              data-index={cat.id}
              role='tab'
              aria-controls={`panel-${cat.id}`}
              aria-selected={tabId === `panel-${cat.id}`}
              onClick={handleChangeTabId}
            >
              <span className={style.text}>{cat.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
