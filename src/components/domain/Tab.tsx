import React from 'react';
import type { Category } from '@/api/category/types';
import type { MicroCMSListResponse } from 'microcms-js-sdk';
import style from './Tab.module.scss';
import Link from 'next/link';

interface Props {
  category: MicroCMSListResponse<Category>;
}

export const Tab = ({ category }: Props): JSX.Element => {
  return (
    <>
      <ul className={style.list}>
        {category.contents.map((cat) => (
          <li key={cat.id} className={`${style.item} ${style.isActive}`}>
            <Link href='/'>
              <a className={style.link}>{cat.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
