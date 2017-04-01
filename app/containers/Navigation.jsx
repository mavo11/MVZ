import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({user, logOut}) => {
  const closeNavigation = () => {
    const navigation = document.querySelectorAll('[role="navigation"]')[0];
    navigation.classList.remove(cx('navigation--active'));
  };

  const handleOpenMenu = () => {
    const navigation = document.querySelectorAll('[role="navigation"]')[0];
    if (!navigation.classList.contains(cx('navigation--active'))) {
      navigation.classList.add(cx('navigation--active'));
    } else {
      closeNavigation();
    }
  };

  return (
    <div>
      <nav className={cx('navigation')} role="navigation">
        <Link
          to="/"
          className={cx('navigation__logo', 'navigation__link')}
          activeClassName={cx('navigation__link--active')}>Ninja Ocean</Link>
        { user.authenticated ? (
          <Link
            onClick={logOut}
            className={cx('navigation__link')} to="/">Logout</Link>
        ) : (
          <Link className={cx('navigation__link')} to="/">Log in</Link>
        )}
        <Link to="/abrechnung-amb-ops-kasse" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Abrechnung ambulante OPs Kasse</Link>
        <Link to="/abrechnung-stat-ops-kasse" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Abrechnung stationäre OPs Kasse</Link>
        <Link to="/abrechnung-priv-ops" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Abrechnung private OPs</Link>
        <Link to="/adressbuch" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Adressbuch</Link>
        <Link to="/igel-ziffern" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>IGEL Ziffern</Link>
        <Link to="/iv-osteo" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>IV Osteoporose</Link>
        <Link to="/kassenabrechnung" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Kassenabrechnung</Link>
        <Link to="/labor" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Labor</Link>
        <Link to="/management-sonstiges" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Management Sonstiges</Link>
        <Link to="/monatsabschluss" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Monatsabschluss</Link>
        <Link to="/opv" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>OPV</Link>
        <Link to="/privatabrechnung" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Privatabrechnung</Link>
        <Link to="/privatziffern" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Privatziffern</Link>
        <Link to="/statistik" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Statistik</Link>
        <Link to="/turbomedeinstellungen" className={cx('navigation__link')} activeClassName={cx('navigation__link--active')} onClick={closeNavigation}>Turbomedeinstellungen</Link>
      </nav>
      <div className={cx('navigation__hamburger')} onClick={handleOpenMenu}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {logOut})(Navigation);
