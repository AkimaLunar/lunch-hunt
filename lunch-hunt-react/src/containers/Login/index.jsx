import * as React from 'react';
import './style.css';
import SimpleButton from '../../components/SimpleButton';
import { graphql, compose } from 'react-apollo';
import { login } from '../../data/login';
import { getLoginForm, updateEmail, updatePassword } from '../../state/loginForm';
import { authenticateUser } from '../../utils/authentication';

class Login extends React.Component {

  onLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.props.loginFormData.loginForm;
    this.props.onLogin({ variables: { email: email.toLowerCase(), password }})
    .then(({ data }) => {
      authenticateUser({
        token: data.login.token,
        userId: data.login.user.id
      })
      const { username, email, color} = data.login.user;
      const user = { username, email, color };
      this.props.setUser({ variables: { ...user } });
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={(e) => this.onLogin(e)}>
          <label className="login__label">email</label>
          <input
            className="login__input"
            type="email"
            value={this.props.loginFormData.loginForm.email}
            onChange={(e) => this.props.onUpdateEmail({ variables: { email:e.target.value }})}
          />
          <label className="login__label">password</label>
          <input className="login__input"
            type="password"
            value={this.props.loginFormData.loginForm.password}
            onChange={(e) => this.props.onUpdatePassword({ variables: { password:e.target.value }})}
          />
          <div className="login__buttonGroup">
            <SimpleButton
              light={true}
              text="close"
              onClick={this.props.close}
              />
            <SimpleButton
              alt={true}
              text="login"
              type="submit"
              onClick={this.onLogin}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(login, {name: 'onLogin'}),
  graphql(getLoginForm, {name: 'loginFormData'}),
  graphql(updateEmail, {name: 'onUpdateEmail'}),
  graphql(updatePassword, {name: 'onUpdatePassword'}),
)(Login);