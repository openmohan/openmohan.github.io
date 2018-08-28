import React from 'react';
import styles from './header.css';

const HeaderComponent = () => <Banner />;

export default HeaderComponent;

const Banner = () => (
  <div className={styles['topnav']}>
    <a className={styles['active']} href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <div className={styles['topnav-right']}>
      <a href="#search">Search</a>
      <a href="#about">About</a>
    </div>
  </div>
)