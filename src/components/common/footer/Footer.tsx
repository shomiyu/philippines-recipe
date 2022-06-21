import React from 'react';
import style from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <p className={style.copyright}>
        <small>©️ 2022 フィリピンりょうりずかん All Rights Reserved.</small>
      </p>
    </footer>
  );
};
