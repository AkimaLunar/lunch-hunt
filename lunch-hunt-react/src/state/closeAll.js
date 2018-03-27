import gql from 'graphql-tag';

export const closeAll = gql` 
  mutation CloseAll {
    closeAll @client
  }
`;

export default {
  closeAll: (_, args, { cache }) => {
    cache.writeData({ data: {
      loginIsOpen: false,
      signupIsOpen: false,
      postLinkIsOpen: false,
    }})
    return null;
  }
}