import gql from 'graphql-tag';

export const signup =  gql`
  mutation Signup($email: String!, $password: String!, $username:String!) {
    signup(email:$email, password:$password, username:$username) {
      token
      user {
        id
        username
        email
        color
      }
    }
  }
`;