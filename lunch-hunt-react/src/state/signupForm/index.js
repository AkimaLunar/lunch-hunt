import gql from 'graphql-tag';

export const signupForm = {
  __typename: 'SignupForm',
  email: '',
  password: '',
  username: ''
}

export const getSignupForm = gql`
  query SignupForm {
    signupForm @client {
     email
     password
     username
    }
  }
`;

export const updateEmail = gql`
 mutation UpdateSignupEmail($email: string) {
  updateSignupEmail(email: $email) @client
  }
`;

export const updatePassword = gql`
 mutation UpdateSignupPassword($password: string) {
  updateSignupPassword(password: $password) @client
  }
`;
export const updateUsername = gql`
 mutation UpdateSignupUsername($username: string) {
  updateSignupUsername(username: $username) @client
  }
`;

export default {
  updateSignupEmail: (_, { email }, { cache }) => {
    const query = gql`
      query GetSignupForm {
        signupForm @client {
          email
          password
          username
        }
      }
    `;
    const previous = cache.readQuery({ query });
    const signupForm = {
      __typename: 'SignupForm',
      ...previous,
      email
    }
    cache.writeData({ data: { signupForm }})
    return null;
  },
  updateSignupPassword: (_, { password }, { cache }) => {
    const query = gql`
      query GetSignupForm {
        signupForm @client {
          email
          password
          username
        }
      }
    `;
    const previous = cache.readQuery({ query });
    const signupForm = {
      __typename: 'SignupForm',
      ...previous,
      password
    }
    cache.writeData({ data: { signupForm }})
    return null;
  },
  updateSignupUsername: (_, { username }, { cache }) => {
    const query = gql`
      query GetSignupForm {
        signupForm @client {
          email
          password
          username
        }
      }
    `;
    const previous = cache.readQuery({ query });
    const signupForm = {
      __typename: 'SignupForm',
      ...previous,
      username
    }
    cache.writeData({ data: { signupForm }})
    return null;
  },
}