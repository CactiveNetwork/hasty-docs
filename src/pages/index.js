import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
          <div align="center">

            <br />

            <p>
              <a href="https://cactivenetwork.github.io/hasty/">
                <img src="https://cactivenetwork.github.io/hasty/img/logo.png" alt="Hasty Logo" width="120" />
              </a>
              <h1>A speedy little database tool</h1>
              <p>
                Hasty.db is a fast, and easy to use tool that can be used to interface with sqlite3, an incredibly fast, efficient, and complex database functional database.
              </p>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Quick-Start Introduction 🏃‍♂️💨
              </Link>
            </p>

            <br />

            <p>
              <a href="https://discord.gg/NeqVuSy"><img src="https://img.shields.io/discord/469773639437516810?color=%237289da&label=discord" alt="Discord" /></a>
              <a href="https://npmjs.com/package/hasty.db"><img src="https://img.shields.io/npm/v/hasty.db?label=hasty.db" alt="Hasty NPM Version" /></a>
              <a href="https://npmjs.com/package/hasty.db"><img src="https://img.shields.io/npm/dm/hasty.db?label=donwloads" alt="Hasty NPM Downloads" /></a>
              <a href="https://cactivenetwork.github.io/hasty/docs"><img src="https://img.shields.io/badge/docs-v1.0.0-ff69b4" alt="Docs" /></a>
            </p>
            <p>
              <a href="https://nodei.co/npm/hasty.db/"><img src="https://nodei.co/npm/hasty.db.png?downloads=true&stars=true" alt="NPM Package Info" /></a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Welcome to Hasty.db!">
      <HomepageHeader />
    </Layout>
  );
}
