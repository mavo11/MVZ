import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({user, logOut}) => {
  const handleOpenMenu = () => {
    const navigation = document.querySelectorAll('[role="navigation"]')[0];
    if(!navigation.classList.contains(cx('navigation--active'))){
      navigation.classList.add(cx('navigation--active'));
    } else {
      navigation.classList.remove(cx('navigation--active'));
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
        <Link className={cx('navigation__link')} to="/dashboard">Dashboard</Link>
        <Link to="/about" className={cx('navigation__link')}
              activeClassName={cx('navigation__link--active')}>About</Link>
      </nav>
      <div className={cx('navigation__hamburger')} onClick={handleOpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {logOut})(Navigation)
