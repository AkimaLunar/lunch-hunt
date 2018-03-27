import gql from 'graphql-tag';

export const getUserById = gql`
  query getUserById($userId: ID!) {
    userById(userId:$userId) {
      username
      email
      color
    }
  }
`
