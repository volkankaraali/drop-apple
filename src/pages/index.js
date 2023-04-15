// libraries
import React from 'react';
import Head from 'next/head';

// components
import Tree from '@/components/Tree';
import Basket from '@/components/Basket';

// styles
import styles from "../styles/Home.module.scss";

export default function Home() {

  return (
    <>
      <Head>
        <title>Drop Apple</title>
        <meta name="description" content="drop apples" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <a href='https://github.com/volkankaraali/drop-apple' target='_blank'>github.com/volkankaraali</a>
      </div>

      <div className={styles.mainContainer}>
        <Tree />
        <div className={styles.sidebar}>
          <Basket />
        </div>
      </div>


    </>
  )
}
