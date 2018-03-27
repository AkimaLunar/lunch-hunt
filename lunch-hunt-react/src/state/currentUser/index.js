import gql from 'graphql-tag';
import { deauthenticateUser } from '../../utils/authentication';

export const currentUser = {
  __typename: 'CurrentUser',
  userId: null,
  isLoggedIn: false,
  username: null,
  email: null,
  color: null
}

export const getCurrentUser = gql`
  query GetCurrentUser {
    currentUser @client {
      userId
      isLoggedIn
      username,
      email,
      color
    }
  }
`;

export const isUserLoggedIn = gql`
  query IsUserLoggedIn {
    currentUser @client {
      isLoggedIn
    }
  }
`;

export const setCurrentUser = gql`
  mutation SetCurrentUser ($userId: ID!, $username: string!, $email: string!, $color: string) {
    setCurrentUser(userId: $userId, username: $username, email: $email, color: $color) @client
  }
`;

export const removeCurrentUser = gql`
  mutation RemoveCurrentUser {
    removeCurrentUser @client
  }
`;

export default {
  setCurrentUser: (_, args, { cache }) => {
    const { userId, username, email, color } = args;
    if (!username) { return null };
    const currentUser = {
      __typename: 'CurrentUser',
      userId,
      isLoggedIn: true,
      username,
      email,
      color
    }
    cache.writeData({
      data: {
        currentUser,
        loginIsOpen: false,
        signupIsOpen: false,
        postLinkIsOpen: false,
      }
    })
    return null
  },

  removeCurrentUser: (_, args, { cache }) => {
    const currentUser = {
      __typename: 'CurrentUser',
      userId: null,
      isLoggedIn: false,
      username: null,
      email: null,
      color: null
    }
    cache.writeData({ data: { currentUser } })
    deauthenticateUser();
    return null
  },
}
