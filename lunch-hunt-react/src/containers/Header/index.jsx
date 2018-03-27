import * as React from 'react';
import './style.css';

import Logo from '../../components/Logo';
import SimpleButton from '../../components/SimpleButton';
import Avatar from '../../components/Avatar';
import Username from '../../components/Username';

const User = ({ user }) => (
  <div className="header__buttonGroup">
    <Username username={user.username} color="light"/>
    <Avatar username={user.username} color={user.color} size="L"/>
  </div>
)

const NoUser = ({ openLogin, openSignup }) => (
  <div className="header__buttonGroup">
    <SimpleButton
      transparent={true}
      text={'Login'}
      onClick={openLogin}/>
    <SimpleButton
      light={true}
      text={'Signup'}
      onClick={openSignup}/>
  </div>
)

class Header extends React.Component {

  render() {
    return (
      <nav className="header">
        <Logo />
        {this.props.user.isLoggedIn
          ? (<User user={this.props.user} />)
          : (<NoUser
            openLogin={this.props.openLogin}
            openSignup={this.props.openSignup}
          />)
        }
      </nav>
    )
  }
}

export default Header;