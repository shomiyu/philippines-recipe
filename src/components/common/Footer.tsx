import React from 'react';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <p className={style.copyright}>
          <small>©️ 2022 フィリピンりょうりずかん All Rights Reserved.</small>
        </p>
      </footer>
    </>
  );
};

export default Footer;
