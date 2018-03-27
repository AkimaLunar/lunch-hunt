import gql from 'graphql-tag';

export const loginForm = {
  __typename: 'LoginForm',
  email: '',
  password: ''
}

export const getLoginForm = gql`
  query LoginForm {
    loginForm @client {
     email
     password
    }
  }
`;

export const updateEmail = gql`
 mutation UpdateLoginEmail($email: string) {
  updateLoginEmail(email: $email) @client
  }
`;

export const updatePassword = gql`
 mutation UpdateLoginPassword($password: string) {
  updateLoginPassword(password: $password) @client
  }
`;

export default {
  updateLoginEmail: (_, { email }, { cache }) => {
    const query = gql`
      query GetLoginForm {
        loginForm @client {
          email
          password
        }
      }
    `;
    const previous = cache.readQuery({ query });
    const loginForm = {
      __typename: 'LoginForm',
      ...previous.loginForm,
      email
    }
    cache.writeData({ data: { loginForm }})
    return null;
  },
  updateLoginPassword: (_, { password }, { cache }) => {
    const query = gql`
      query GetLoginForm {
        loginForm @client {
          email
          password
        }
      }
    `;
    const previous = cache.readQuery({ query });
    const loginForm = {
      __typename: 'LoginForm',
      ...previous.loginForm,
      password
    }
    cache.writeData({ data: { loginForm }})
    return null;
  }
}