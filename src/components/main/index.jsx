import React from 'react';
import PropTypes from 'prop-types';
import style from './main.css';
import Header from '../header';

const MainComponent = ({ title }) => (
  <div className={style['main-parent']}>
    <Header />
    <div className={style['main-component']}>
      <img className={style['image-header']} src="../../../static/images/mohan.jpg"></img>
    </div>
  </div>
);

MainComponent.propTypes = {
  title: PropTypes.string,
};

export default MainComponent;
