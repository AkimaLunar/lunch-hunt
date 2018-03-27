import gql from 'graphql-tag';

export const getCurrentUser = gql`
  query GetCurrentUser {
    currentUser @client {
      userId
      isLoggedIn
    }
  }
`;
