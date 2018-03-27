import * as React from 'react';
import './style.css';
import { client } from '../../apolloClient'
import { getUserById } from '../../data/getUserById';
import { graphql, compose } from 'react-apollo';
import { shellQuery } from './gql';
import { setCurrentUser, removeCurrentUser } from '../../state/currentUser';
import { openLogin } from '../../state/loginIsOpen';
import { openSignup } from '../../state/signupIsOpen';
import { openPostLink } from '../../state/postLinkIsOpen';
import { closeAll } from '../../state/closeAll';
import Gradient from '../../components/Gradient'
import Header from '../Header';
import Feed from '../Feed';
import Login from '../Login';
import Signup from '../Signup';
import PostLink from '../PostLink';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import {
  isUserAuthenticated,
  getUserId
} from '../../utils/authentication';

class Shell extends React.Component {

  componentWillMount() {
    if (isUserAuthenticated()) {
      const userId = getUserId();
      client.query({
        query: getUserById,
        variables: { userId }
      })
        .then(({ data }) => {
          const { username, email, color } = data.userById;
          this.props.setCurrentUser({ variables: { userId, username, email, color } })
        })
        .catch(error => console.log('Failed to retrieve user', error))
    }
  }

  render() {
    if (this.props.data.postLinkIsOpen) { return <PostLink /> }
    return (
      <div className="shell__wrapper">
        <Gradient />
        <main className="shell">
          <Header
            user={this.props.data.currentUser}
            openLogin={this.props.openLogin}
            openSignup={this.props.openSignup}
          />
          {this.props.data.loginIsOpen
            ? (<Login
              setUser={this.props.setCurrentUser}
              close={this.props.closeAll}
            />)
            : this.props.data.signupIsOpen
              ? (<Signup
                setUser={this.props.setCurrentUser}
                close={this.props.closeAll} />
              )
              : ''
          }
          <Feed />

          {this.props.data.currentUser.isLoggedIn && !this.props.data.postLinkIsOpen
            ? <FloatingButton onClick={this.props.openPostLink} text="POST" />
            : ''
          }
          <Footer user={this.props.data.currentUser} logout={this.props.removeCurrentUser} />
        </main>
      </div>
    )
  }
}

export default compose(
  graphql(shellQuery),
  graphql(setCurrentUser, { name: 'setCurrentUser' }),
  graphql(removeCurrentUser, { name: 'removeCurrentUser' }),
  graphql(openLogin, { name: 'openLogin' }),
  graphql(openSignup, { name: 'openSignup' }),
  graphql(openPostLink, { name: 'openPostLink' }),
  graphql(closeAll, { name: 'closeAll' })
)(Shell);
