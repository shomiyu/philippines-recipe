import Link from 'next/link';
import React from 'react';
import style from './Card.module.scss';
import type { Thumbnail } from '@/api/recipe/types';

interface Props {
  id: string;
  title: string;
  tagalog: string;
  thumbnail?: Thumbnail;
  level?: string[];
}

export const Card = ({
  id,
  title,
  tagalog,
  thumbnail,
  level,
}: Props): JSX.Element => {
  return (
    <>
      <Link href={'/recipe/' + id}>
        <a className={style.link}>
          <div>
            <figure
              className={`${style.thumbnail} ${
                !thumbnail ? style.noimage : ''
              }`}
            >
              {thumbnail ? (
                <img
                  src={thumbnail?.url + '?fit=crop&w=420&h=256'}
                  alt=''
                  width='420'
                  height='256'
                />
              ) : (
                <img
                  src='/images/no_image.jpg'
                  alt='no image'
                  width='420'
                  height='256'
                />
              )}
            </figure>
            {level && <p className={style.level}>{level}</p>}
            <div className={style.title}>
              <p className={style.jaTitle}>{title}</p>
              <p lang='tl' className={style.tlTitle}>
                {tagalog}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
