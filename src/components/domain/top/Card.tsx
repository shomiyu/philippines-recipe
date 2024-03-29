import Link from 'next/link';
import React from 'react';
import style from './Card.module.scss';
import type { MicroCMSImage } from 'microcms-js-sdk';
import { StarRate } from '@/components/common/StarRate/StarRate';
import cx from 'classnames';

interface Props {
  id: string;
  title: string;
  tagalog: string;
  thumbnail?: MicroCMSImage;
  level: ['easy' | 'normal' | 'difficult'];
}

export const Card = ({
  id,
  title,
  tagalog,
  thumbnail,
  level,
}: Props): JSX.Element => {
  return (
    <Link href={`/recipe/${id}`}>
      <a className={style.link}>
        <div>
          <figure
            className={cx(style.thumbnail, !thumbnail ? style.noimage : '')}
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
          {level.length >= 1 && (
            <StarRate className={style.level} level={level[0]} />
          )}
          <div className={style.title}>
            <p className={style.jaTitle}>{title}</p>
            <p lang='tl' className={style.tlTitle}>
              {tagalog}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
