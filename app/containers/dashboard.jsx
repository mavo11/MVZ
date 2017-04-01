import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';

import styles from '../css/components/dashboard';

const cx = classNames.bind(styles);

const Dashboard = () => (
  <div className={cx('container', 'dashboard')}>
    <Link to="/abrechnung-amb-ops-kasse" className={cx('dashboard__item')}>Abrechnung ambulante OPs Kasse</Link>
    <Link to="/abrechnung-stat-ops-kasse" className={cx('dashboard__item')}>Abrechnung stationäre OPs Kasse</Link>
    <Link to="/abrechnung-priv-ops" className={cx('dashboard__item')}>Abrechnung private OPs</Link>
    <Link to="/adressbuch" className={cx('dashboard__item')}>Adressbuch</Link>
    <Link to="/igel-ziffern" className={cx('dashboard__item')}>IGEL Ziffern</Link>
    <Link to="/iv-osteo" className={cx('dashboard__item')}>IV Osteoporose</Link>
    <Link to="/kassenabrechnung" className={cx('dashboard__item')}>Kassenabrechnung</Link>
    <Link to="/labor" className={cx('dashboard__item')}>Labor</Link>
    <Link to="/management-sonstiges" className={cx('dashboard__item')}>Management Sonstiges</Link>
    <Link to="/monatsabschluss" className={cx('dashboard__item')}>Monatsabschluss</Link>
    <Link to="/opv" className={cx('dashboard__item')}>OPV</Link>
    <Link to="/privatabrechnung" className={cx('dashboard__item')}>Privatabrechnung</Link>
    <Link to="/privatziffern" className={cx('dashboard__item')}>Privatziffern</Link>
    <Link to="/statistik" className={cx('dashboard__item')}>Statistik</Link>
    <Link to="/turbomedeinstellungen" className={cx('dashboard__item')}>Turbomedeinstellungen</Link>
  </div>
);

export default Dashboard;
