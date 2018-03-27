import gql from 'graphql-tag';

export const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email:$email, password:$password) {
      token
      user {
        id
        username
        email
        color
      }
    }
  }
`