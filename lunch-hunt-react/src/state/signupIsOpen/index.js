import gql from 'graphql-tag';

export const signupIsOpen = false;

export const getSignupIsOpen = gql`{ 
  query GetSignupIsOpen {
    loginIsOpen @client
  }
}`;

export const openSignup = gql`
  mutation OpenSignup {
    openSignup(isOpen:$isOpen) @client
  }
`;

export default {
  openSignup: (_, args, { cache }) => {
    cache.writeData({ data: {
      loginIsOpen: false,
      signupIsOpen: (args.isOpen === undefined) ? true : args.isOpen,
      postLinkIsOpen: false,
    }})
    return null;
  }
}