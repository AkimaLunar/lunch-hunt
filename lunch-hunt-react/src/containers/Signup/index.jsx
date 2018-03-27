import * as React from 'react';
import './style.css';
import SimpleButton from '../../components/SimpleButton';
import { graphql, compose } from 'react-apollo';
import { signup } from '../../data/signup';
import { getSignupForm, updateEmail, updatePassword, updateUsername } from '../../state/signupForm';
import { authenticateUser } from '../../utils/authentication';

class Signup extends React.Component {

  onSignup = (e) => {
    e.preventDefault();
    const { email, password, username } = this.props.signupFormData.signupForm;
    this.props.onSignup({ variables: { email: email.toLowerCase(), password, username }})
    .then(({ data }) => {
      authenticateUser({
        token: data.signup.token,
        userId: data.signup.user.id
      })
      const { username, email, color } = data.signup.user
      const user = { username, email, color };
      this.props.setUser({ variables: { ...user } });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="signup">
        <form className="signup__form" onSubmit={(e) => this.onSignup(e)}>
          <label className="signup__label">email</label>
          <input
            className="signup__input"
            type="email"
            value={this.props.signupFormData.signupForm.email}
            onChange={(e) => this.props.onUpdateEmail({ variables :{ email:e.target.value }})}
          />
          <label className="signup__label">password</label>
          <input className="signup__input"
            type="password"
            value={this.props.signupFormData.signupForm.password}
            onChange={(e) => this.props.onUpdatePassword({ variables :{ password:e.target.value }})}
          />
          <label className="signup__label">username</label>
          <input className="signup__input"
            type="text"
            value={this.props.signupFormData.signupForm.username}
            onChange={(e) => this.props.onUpdateUsername({ variables :{ username:e.target.value }})}
          />
          <div className="signup__buttonGroup">
            <SimpleButton
              light={true}
              text="close"
              onClick={this.props.close}
            />
            <SimpleButton
              dark={true}
              text="signup"
              onClick={this.onSignup}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(signup, {name: 'onSignup'}),
  graphql(getSignupForm, {name: 'signupFormData'}),
  graphql(updateEmail, {name: 'onUpdateEmail'}),
  graphql(updatePassword, {name: 'onUpdatePassword'}),
  graphql(updateUsername, {name: 'onUpdateUsername'}),
)(Signup);