import gql from 'graphql-tag';

export const loginIsOpen = false;

export const getIsLoginOpen = gql`{ 
  query GetIsLoginOpen {
    loginIsOpen @client
  }
}`;

export const openLogin = gql` 
  mutation OpenLogin {
    openLogin(isOpen:$isOpen) @client
  }
`;

export default {
  openLogin: (_, args, { cache }) => {
    cache.writeData({ data: {
      loginIsOpen: (args.isOpen === undefined) ? true : args.isOpen,
      signupIsOpen: false,
      postLinkIsOpen: false,
    }})
    return null;
  }
}