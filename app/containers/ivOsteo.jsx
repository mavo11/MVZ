import React from 'react';
import classNames from 'classnames/bind';
import Markdown from 'react-remarkable';
import styles from '../css/components/dashboard';

const cx = classNames.bind(styles);

const content = require('../content/iv-osteo.md');

const Dashboard = () => (
  <div className={cx('container')}>
    <Markdown source={content} />
  </div>
);

export default Dashboard;
