import gql from 'graphql-tag';

export const shellQuery = gql`
  query ShellQuery {
    currentUser @client {
      userId
      isLoggedIn,
      username,
      email,
      color
    }
    loginIsOpen @client,
    signupIsOpen @client,
    postLinkIsOpen @client
 }
`;
