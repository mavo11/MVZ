import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users';
import { push } from 'react-router-redux';
import styles from '../css/components/login';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { manualLogin, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (isLogin) {
      manualLogin({ email, password });
    }
  }

  renderHeader() {
    const { user: { isLogin } } = this.props;
    if (isLogin) {
      return <h1 className={cx('login__headline')}>Login</h1>;
    }
  }

  render() {
    const { isWaiting, message } = this.props.user;

    return (
      <div
        className={cx('login', {
          waiting: isWaiting
        })}
      >
          { this.renderHeader() }
          <div className={cx('login__content')}>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className={cx('login__input')}
                type="text"
                ref="email"
               placeholder="name"
              />
              <input
                className={cx('login__input')}
                type="password"
                ref="password"
                placeholder="password"
              />
              <p
                className={cx('login__error-message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <input
                className={cx('login__submit')}
                type="submit"
                value="Login" />
            </form>
          </div>
        </div>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps({user}) {
  return {
    user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, { manualLogin, signUp, toggleLoginMode })(LoginOrRegister);

