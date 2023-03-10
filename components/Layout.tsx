import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Setting from '../common/Setting';

type Props = {
  children?: ReactNode
  title?: string
};

const default_title = 'practice_react-chartjs-2.ts';

const Layout = ({ children, title = default_title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={`${Setting.IMG_ROOT_PATH}/Logo.svg`} type="image/x-icon" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/chart">Chart</Link>
        <Link href="/bar">Bar</Link>
        <Link href="/line">Line</Link>
        <Link href="/pie">Pie</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
    </footer>
  </div>
);

export default Layout;
