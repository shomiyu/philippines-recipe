import Link from 'next/link';
import style from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <p>
        <Link href='/'>
          <a>
            <img
              src='/images/logo.svg'
              alt='フィリピンりょうりずかん'
              width='94'
              height='44'
            />
          </a>
        </Link>
      </p>
    </header>
  );
};
