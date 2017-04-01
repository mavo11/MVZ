import React from 'react';
import classNames from 'classnames/bind';
import Markdown from 'react-remarkable';
const path = require('path');
import styles from '../css/components/dashboard';

const cx = classNames.bind(styles);

const content = require(path.resolve(process.cwd(), 'app/content/dashboard.md'));

const Dashboard = () => (
  <div className={cx('container')}>
    <Markdown source={content} />
  </div>
);

export default Dashboard;
